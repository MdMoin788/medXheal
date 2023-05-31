import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Routesfiles } from '../../../constants/_Requests/Routesfiles';
import { postRequest } from '../../../constants/_Requests/Requests';
import { useEffect } from 'react';
import "../../../styles/variable.less"
import { toast } from 'react-toastify';
import DateBox from '../../../constants/DateBox';
import moment from 'moment';

const RescheduleAppointment = ({ row }) => {
    const user = JSON.parse(localStorage.getItem("user")) || {}

    let [payload, setPayload] = useState({
        appointment_id: row?._id,
        user_id: user?._id,
        appointment_date: row?.appointmentDate,
    })
    const [updateRow, setUpdateRow] = useState(row)
    const [openModal, setOenModal] = useState(false)
    const [loader, setLoader] = useState(false)



    const updatetappointmentDateHandler = async () => {
        payload.appointment_date = moment(payload?.appointment_date).format('YYYY-MM-DD')

        if (!payload?.appointment_id || !payload?.user_id || !payload?.appointment_date) {

            toast("Something went wrongsss", { position: "top-center" })

        }
        else {
            setLoader(true)
            const appointmentappointmentDate = await postRequest(Routesfiles().appointmentReschedule, payload, setLoader)
            if (appointmentappointmentDate?.data?.success) {
                row["appointmentDate"] = payload?.appointment_date
                setUpdateRow(row)
                toast(appointmentappointmentDate?.data?.message, { position: "top-center" })
                setOenModal(false)
            }
            else {
                toast(appointmentappointmentDate?.data?.message, { position: "top-center" })

            }
        }

    }

    useEffect(() => {
        setUpdateRow(row)
    }, [row])

    const handleClose = () => {
        setOenModal(false)
    }

    let Status = updateRow?.appointmentDate == moment(new Date()).format("YYYY-MM-DD") ? "gColor" : updateRow?.appointmentDate < moment(new Date()).format("YYYY-MM-DD") ? "wColor" : "pColor"


    return <>
        <span className={`badge  p-2 ${Status} pointers`} onClick={() => setOenModal(true)}>
            {updateRow?.appointmentDate || 'Not Set'}  &nbsp; <FontAwesomeIcon icon={faEdit} />
        </span>


        {openModal ? <Modal show={openModal} onHide={handleClose} dialogClassName="modal"
            // size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="fs-6 ms-2">  <span className='text-danger'> Note : </span> <span className='text-danger fs-5'> `` </span>Please make sure that the current patient treatment is completed then update the status to completed otherwise current patient data will get remove from here and will move to old appointment section and not able to do further actions  <span className='text-danger fs-5'> ``</span>   </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <DateBox name="appointment_date" type="date" inputsize="col-12" onchangeHandler={setPayload} paylaod={payload} prevdata={updateRow?.appointmentDate} />


                <div className='d-flex  align-items-center justify-content-end '>
                    <button className="btn btn-sm p-1 rbgColor mt-4 d-flex" disabled={loader ? true : false} onClick={() => updatetappointmentDateHandler()}>


                        {
                            loader ?
                                <>
                                    <div className='spinner-border mr-15' role='status'></div>
                                    <h4 className='fw-bold text-white fs-6 ms-2 mt-2'>Updating...</h4>
                                </>
                                : <h4 className='fw-bold text-white fs-6 ms-2 mt-2'>Change Status</h4>
                        }
                    </button>
                </div>


            </Modal.Body>
        </Modal> : ''}


















    </>








}

export default RescheduleAppointment

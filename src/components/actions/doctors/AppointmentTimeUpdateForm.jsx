import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Routesfiles } from '../../../constants/_Requests/Routesfiles';
import { postRequest } from '../../../constants/_Requests/Requests';
import { useEffect } from 'react';
import SelectBox from '../../../constants/SelectBox';
import "../../../styles/variable.less"
import { toast } from 'react-toastify';
import { TimeStatus } from './TimeStatus';

const AppointmentTimeUpdateForm = ({ row }) => {
    const filterLists = useSelector((store) => store.FilterReducer.filterLists)

    const [select, setSelect] = useState({})
    const [updateRow, setUpdateRow] = useState(row)
    const [openModal, setOenModal] = useState(false)
    const [loader, setLoader] = useState(false)
    const [disable, setDisable] = useState(null)

    const onchangeHandler = (event, value) => {
        setSelect(value)

    }





    const updateAppointmentTime = async () => {
        setLoader(true)
        const appointmentTreatmentStatus = await postRequest(Routesfiles().appointmentTimeStatusUpdate, {
            appointment_id: row?._id,
            appointement_time: select?.title
        }, setLoader)

        console.log('appointmentTreatmentStatus', appointmentTreatmentStatus);

        if (appointmentTreatmentStatus?.data?.success) {
            row["appointmentTime"] = select?.title
            setUpdateRow(row)
            console.log('row', row);
            toast(appointmentTreatmentStatus?.data?.message, { position: "top-center" })
            setDisable(200)
            setOenModal(false)
        }
        else {
            toast(appointmentTreatmentStatus?.data?.message, { position: "top-center" })

        }


    }

    

    useEffect(() => {
        setUpdateRow(row)

    }, [row])

    const handleClose = () => {
        setOenModal(false)
    }

    let Status = updateRow?.appointmentTime == "pending" ? "rColor" : "gColor"

    return <>
        <span className={`badge  p-2 ${Status} pointers`} onClick={() => setOenModal(true)}>
            {updateRow?.appointmentTime == "pending" ? updateRow?.appointmentTime?.charAt(0)?.toUpperCase() + updateRow?.appointmentTime?.slice(1) : updateRow?.appointmentTime || 'Not Set'}  &nbsp; <FontAwesomeIcon icon={faEdit} />
        </span>


        {openModal ? <Modal show={openModal} onHide={handleClose} dialogClassName="modal"
            // size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="fs-6">Update Appointment Time</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <SelectBox onchangeHandler={onchangeHandler} array={filterLists?.timeslots} defaultValue={TimeStatus(updateRow?.appointmentTime)?.id} title="title" placeholder="Select Treatment Status" />

                <div className='d-flex  align-items-center justify-content-end '>
                    <button className="btn btn-sm p-1 rbgColor mt-4 d-flex" disabled={loader ? true : false} onClick={() => updateAppointmentTime()}>


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

export default AppointmentTimeUpdateForm

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

const TreatmentStatusUpdateForm = ({ row }) => {
    const filterLists = useSelector((store) => store.FilterReducer.filterLists)

    const [select, setSelect] = useState({})
    const [updateRow, setUpdateRow] = useState(row)
    const [openModal, setOenModal] = useState(false)
    const [loader, setLoader] = useState(false)
    const [disable, setDisable] = useState(null)

    const onchangeHandler = (event, value) => {
        console.log('value', value);
        setSelect(value)

    }

    const updatetTreatmentStatusHandler = async () => {
        setLoader(true)
        const appointmentTreatmentStatus = await postRequest(Routesfiles().appointmentUpdateTreatmentStatus, {
            appointment_id: row?._id,
            treatment_id: select?.id
        }, setLoader)
        if (appointmentTreatmentStatus?.data?.success) {
            row["treatmentStatus"] = select?.title
            setUpdateRow(row)
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

    let Status = updateRow?.treatmentStatus == "pending" ? "rColor" : updateRow?.treatmentStatus == "completed" ? "gColor" : "wColor"
    const currentStatus = updateRow?.treatmentStatus == "pending" ? 0 : updateRow?.treatmentStatus == "completed" ? 1 : 2


    return <>
        <span className={`badge  p-2 ${Status} pointers`} onClick={() => setOenModal(true)}>
            {updateRow?.treatmentStatus?.charAt(0)?.toUpperCase() + updateRow?.treatmentStatus?.slice(1) || 'Not Set'}  &nbsp; <FontAwesomeIcon icon={faEdit} />
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

                <SelectBox onchangeHandler={onchangeHandler} array={filterLists?.treatmentStatus} defaultValue={currentStatus} title="title" placeholder="Select Treatment Status" />

                <div className='d-flex  align-items-center justify-content-end '>
                    <button className="btn btn-sm p-1 rbgColor mt-4 d-flex" disabled={loader ? true : false} onClick={() => updatetTreatmentStatusHandler()}>


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

export default TreatmentStatusUpdateForm

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
// import socket from '../../../constants/Sockets';
const user = JSON.parse(localStorage.getItem('user')) || {};
console.log('user', user);


const StatusUpdateForm = ({ row }) => {
    const filterLists = useSelector((store) => store.FilterReducer.filterLists)

    const [select, setSelect] = useState({})
    const [updateRow, setUpdateRow] = useState(row)
    const [openModal, setOenModal] = useState(false)
    const [loader, setLoader] = useState(false)




    useEffect(() => {
        setUpdateRow(row)
    }, [row])

    
    const onchangeHandler = (event, value) => {
        setSelect(value)

    }
    
    const updatetTreatmentStatusHandler = async () => {
        setLoader(true)
        const appointmentTreatmentStatus = await postRequest(Routesfiles().appointmentUpdateStatus, {
            appointment_id: row?._id,
            locationId: user?.locationId,
            status_id: select?.id,
        }, setLoader)
        if (appointmentTreatmentStatus?.data?.success  == true) {
            console.log('row', row);
            row["status"] = select?.title
            setUpdateRow(row)
            toast(appointmentTreatmentStatus?.data?.message, { position: "top-center" })

            setOenModal(false)
        }
        else {
            toast(appointmentTreatmentStatus?.data?.message, { position: "top-center" })

        }


    }



    const handleClose = () => {
        setOenModal(false)
    }

    let Status = updateRow?.status == "doctor" ? "wColor" : updateRow?.status == "lab test" ? "rColor" : "gColor"
    const currentStatus = updateRow?.status == "doctor" ? 0 : updateRow?.status == "lab test" ? 1 : 2


    return <>
        <span className={`badge  p-2 ${Status} pointers`} onClick={() => setOenModal(true)}>
            {updateRow?.status?.charAt(0)?.toUpperCase() + updateRow?.status?.slice(1) || 'Not Set'}  &nbsp; <FontAwesomeIcon icon={faEdit} />
        </span>


        {openModal ? <Modal show={openModal} onHide={handleClose} dialogClassName="modal"
            // size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="fs-6">Update Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <SelectBox onchangeHandler={onchangeHandler} array={filterLists?.appointmentStatus} defaultValue={currentStatus} title="title" placeholder="Select Treatment Status" />

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

export default StatusUpdateForm

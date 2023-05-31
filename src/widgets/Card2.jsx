import React from 'react'

const Card2 = () => {
    return (


        <div className="card bg- mb-3 text-white" style={{ background: "linear-gradient(45deg, #1557cd 0%, #5ae1ff 100%)" }} >
            <div className="card-header d-flex flex-column ">
                {/* doctor name  */}
                <div className='d-flex'>
                    <img style={{ width: "50px", height: "50px" }} src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPyzPCr6ijntYC242yLTynrUwke9QMgSSjImj1yMptA&usqp=CAU&ec=48600113" alt="..." className="rounded-circle me-3"></img>
                    <h5 className='mb-2  fw-bold mt-2 mb-4'>Dr Rajesh Kumar Singh</h5>
                </div>
                {/* about doctor  ---------- */}
                <div className='d-flex justify-content-between'>
                    <span className='' >General Physician</span>
                    <span className='' >3 years </span>
                </div>
            </div>
            {/* body  --------------- */}
            <div className="card-body" >
                <div className='d-flex justify-content-between '>
                    <h5 className="card-title fw-bold">Md Moin</h5>
                    <span className=' mb-2' >24y (age) </span>
                </div>
                {/* date and time  */}
                <div className='d-flex justify-content-between mb-2'>
                    <span>Date: 23-05-2023</span>
                    <span>Appointment: 3pm</span>
                </div>

                {/* status  -------------------- */}
                <h5 className='borde border-top text-center p-2 rounded'> Track Status ( Patient )</h5>
                <div className=" d-flex flex-column ">
                    <div className='d-flex border   pt-1 pb-1 px-3 rounded justify-content-between mb-2'>
                        <span className=" rounded-circle pt-1 pb-1">Status</span>
                        {/* <span className='bg-success text-white  pt-1 pb-1 px-2  text-start  rounded' > जाँच ( Test )</span> */}
                        <span className='bg-success text-white  pt-1 pb-1 px-2  text-start  rounded' > Unknown</span>
                    </div>
                    <div className='d-flex border   pt-1 pb-1 px-3 rounded justify-content-between mb-2'>
                        <span className=" rounded-circle pt-1 pb-1">Patient Condition </span>
                        <span className='bg-success text-white  px-2 pt-1 pb-1 text-start  rounded' >Unknown</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card2

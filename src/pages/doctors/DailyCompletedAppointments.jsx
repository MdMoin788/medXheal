import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import moment from 'moment/moment';
import { QueryParams } from '../../constants/_Requests/QueryParams';
import { Routesfiles } from '../../constants/_Requests/Routesfiles';
import { getRequest } from '../../constants/_Requests/Requests';
import { AllFielSearch } from '../../constants/AllFielSearch';
import Button from '../../constants/Button';
import { useDispatch } from 'react-redux';
import { filterLists } from '../../Redux/Actions/FilterListsActions/FilterListsActions';
import { AppointmentColumns } from '../../components/_columns/doctors/AppointmentColumns';

const DailyCompletedAppointments = () => {


  const { _id } = JSON.parse(localStorage.getItem('user')) || {};
  const id = "647189efb426d7acfaea094a";
  const [pending, setPending] = React.useState(false)
  const [Search, setSearch] = useState("")
  const [filterData, setfilterData] = useState([])
  const [mainData, setMainData] = useState([])


  const dispatch = useDispatch()

  React.useEffect(() => {
    const updatedData = AllFielSearch(mainData, Search)
    setfilterData(updatedData)
  }, [Search])

  async function fetchServerData(setloading) {
    dispatch(filterLists())

    let newQueryParams = { ...QueryParams("getAllTodayCompletedAppointmentsByDoctor", "?") }
    newQueryParams.setQuery += `doctor_id=${id}`

    const { data } = await getRequest(Routesfiles(newQueryParams)?.getAllTodayCompletedAppointmentsByDoctor, setloading)
    setfilterData(data?.data?.totalAppointment)
    setMainData(data?.data?.totalAppointment)
    
  }

  useEffect(() => {
    fetchServerData(setPending)
  }, [])


  return (
    <>
      <div>
        {
          <DataTable
            title="Daily Completed Appointment Records  ( Patient )"
            progressPending={pending}
            columns={AppointmentColumns}
            data={filterData}
            pagination
            fixedHeader
            fixedHeaderScrollHeight='auto'
            selectableRowsHighlight
            highlightOnHover
            subHeader
            // server bb
            // sortServer
            // onSort={handleSort}
            // persistTableHead
            // paginationServer
            // paginationTotalRows={totalRows}
            // onChangeRowsPerPage={{}}
            // onChangePage={handlePageChange}
            // server 
            subHeaderComponent={
              <>
                <div className='w-100 d-flex justify-content-between mb-3 '>
                  <div className='d-flex align-items-start justify-content-start '>
                    <input
                      type="text"
                      placeholder='Search Here'
                      value={Search}
                      onChange={(e) => setSearch(e.target.value)}
                      className=' form-control me-2 align-start'
                    />
                  </div>
                  <div className='d-flex align-items-center justify-content-end '>
                    <div className='d-flex align-items-center justify-content-center '>
                      {/* <button className='btn  btn-primary'>Search</button> */}
                      <Button   Title="Search" bgColor={null} textColor={"white"} clickhandler={null} params={null} />
                    </div>
                  </div>
                </div>
              </>
            }
          />
        }
      </div>
    </>
  )
}


export default DailyCompletedAppointments

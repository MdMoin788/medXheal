import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component'
import moment from 'moment/moment';
import { QueryParams } from '../../constants/_Requests/QueryParams';
import { Routesfiles } from '../../constants/_Requests/Routesfiles';
import { getRequest } from '../../constants/_Requests/Requests';
import Button from '../../constants/Button';
import { useDispatch } from 'react-redux';
import { filterLists } from '../../Redux/Actions/FilterListsActions/FilterListsActions';
import { AppointmentColumns } from '../../components/_columns/doctors/AppointmentColumns';


const CancelledAppointments = () => {


  const { _id } = JSON.parse(localStorage.getItem('user')) || {};
  const id = "647189efb426d7acfaea094a";
  const [pending, setPending] = React.useState(false)
  const [Search, setSearch] = useState("")
  const [filterData, setfilterData] = useState([])

  // server  
  const [totalRows, setTotalRows] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [direction, setdirections] = useState("");
  const dispatch = useDispatch()

  const [payload, setPayload] = useState({
    startDate: moment().add(1, "days").format("YYYY-MM-DD"),
    endDate: moment().add(7, "days").format("YYYY-MM-DD"),
  })

  async function fetchServerData(search="", page=1, setloading=null) {

    dispatch(filterLists())

    let newQueryParams = { ...QueryParams("getAllCancelledAppointmentsByDoctor", "?") }
    newQueryParams.setQuery += `doctor_id=${id}`
    newQueryParams.setQuery += `&search=${search}`
    newQueryParams.setQuery += `&page=${page}`
    newQueryParams.setQuery += `&limit=10`
    newQueryParams.setQuery += `&sortby=${sortBy}`
    newQueryParams.setQuery += `&direction=${direction}`

    const { data } = await getRequest(Routesfiles(newQueryParams)?.getAllCancelledAppointmentsByDoctor, setloading)
    setfilterData(data?.data?.totalAppointment)
    setTotalRows(data?.data?.count)
  }

 
  // server side everything handling here ++++++++++
  useEffect(() => {
    !Search && setPending(true)
    !Search && fetchServerData("", 1, setPending)
  }, [Search])

  // // search debouncing -----------------------------------
  useEffect(() => {
    let timer = setTimeout(async function () {
      Search && setPending(true)
      Search && fetchServerData(Search && Search, 1, setPending)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [Search])

  // for pagination when changing page
  const handlePageChange = (page) => {
    setPending(true)
    fetchServerData("", page, setPending)
  };

  //  sorting column -------------------------------------------
  const handleSort = async (column, sortDirection) => {
    setSortBy(column.sortField)
    setdirections(sortDirection)
    setPending(true)
    fetchServerData("", 1, setPending)
  };






  return (
    <>
      <div>
        {
          <DataTable
            title="Cancelled Appointment Records ( Patient )"
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
            sortServer
            onSort={handleSort}
            persistTableHead
            paginationServer
            paginationTotalRows={totalRows}
            onChangePage={handlePageChange}
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


export default CancelledAppointments

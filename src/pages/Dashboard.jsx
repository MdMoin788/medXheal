import React, { useEffect } from 'react'
import '../styles/dashboard.less'
import { LineWave } from 'react-loader-spinner';
import { useState } from 'react';
import { UrlSwitcher } from '../constants/_Requests/UrlSwitcher';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BiotechIcon from '@mui/icons-material/Biotech';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HealingIcon from '@mui/icons-material/Healing';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { Routesfiles } from './../constants/_Requests/Routesfiles';
import { getRequest } from '../constants/_Requests/Requests';


export const Dashboard = () => {
  UrlSwitcher()


  const [dailyRecords, setdailyRecords] = useState({})
  async function getData() {
    const { data } = await getRequest(Routesfiles().dailyRecords, null)
    setdailyRecords(data.dailyRecords)
  }

  useEffect(() => {
    getData()
  }, [])

  const dailydashContent = [
    { record: "doctorCounts", name: "Total Doctors", icon: <LocalHospitalIcon className='fs-2' />, styles: "custom-card1" },
    { record: "patientCounts", name: "Total Patients", icon: <HealingIcon className='fs-2' />, styles: "custom-card2" },
    { record: "pathologyCounts", name: "Total Pathologies", icon: <BiotechIcon className='fs-2' />, styles: "custom-card3" },
    { record: "medicalCounts", name: "Total Medicals", icon: <VaccinesIcon className='fs-2' />, styles: "custom-card4" },
    { record: "staffCounts", name: "Total Staffs", icon: <Diversity2Icon className='fs-2' />, styles: "custom-card5" },
  ]



  return (
    <>





      <div className='d-flex justify-content-between mb-3'>
        <div>
          <h1>
            {/* Hi {user?.first_name}, */}
            Hi Moin,
          </h1>
        </div>
      </div>
      <div className='p-1 dailyDashboardCard'>

        {
          dailydashContent?.map((element, keys) => {

            return <div className={`card ${element?.styles}`} key={keys}>
              <div className="d-flex justify-content-between">
                <div className="">
                  <div className="card-body">
                    <p className="card-subtitle mb-2 card-subtitle-custom ">{element?.name}</p>
                    <h1 className="card-title card-title-custom">{
                      dailyRecords[element?.record] != null ? dailyRecords[element?.record] : <LineWave
                        height="60"
                        width="100"
                        color="#ffff"
                        ariaLabel="line-wave"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        firstLineColor=""
                        middleLineColor=""
                        lastLineColor=""
                      />}</h1>
                  </div>
                </div>
                <div className="d-flex align-items-center icon-custom text-white fs-1">
                  {element?.icon}
                </div>
              </div>

            </div>
          })
        }

      </div >
    </>
  )
}




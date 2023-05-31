import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard } from '../pages/Dashboard';
import OldAppointments from '../pages/doctors/OldAppointments';
import DailyAppointments from '../pages/doctors/DailyAppointments';
import DailyCompletedAppointments from '../pages/doctors/DailyCompletedAppointments';
import AllCompletedAppointments from '../pages/doctors/AllCompletedAppointments';
import MissedAppointments from '../pages/doctors/MissedAppointments';
import CancelledAppointments from '../pages/doctors/CancelledAppointments';
import DailyLabAppointment from '../pages/pathologies/DailyLabAppointment';


const TractRoutes = () => {
    return <Outlet />
}



const PrivateRoutes = () => {
    return (
        <Routes>
            <Route element={<TractRoutes />}>
                <Route path='/dashboard' element={< Dashboard />} />
                <Route path='/dashboard/doctor/old-appointments' element={< OldAppointments/>} />
                <Route path='/dashboard/doctor/daily-appointments' element={< DailyAppointments/>} />
                <Route path='/dashboard/doctor/daily-completed-appointments' element={< DailyCompletedAppointments />} />
                <Route path='/dashboard/doctor/old-completed-appointments' element={< AllCompletedAppointments />} />
                <Route path='/dashboard/doctor/missed-appointments' element={< MissedAppointments />} />
                <Route path='/dashboard/doctor/cancelled-appointments' element={< CancelledAppointments />} />
                <Route path='/dashboard/pathology/daily-lab-test' element={< DailyLabAppointment />} />
            </Route>
        </Routes>
    )
}

export { PrivateRoutes }





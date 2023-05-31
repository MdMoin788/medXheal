export const Routesfiles = (QeueryParams) => {
    const URLs=
    {
        createUserProfile: "createUserProfile",
        loginUserProfile: "loginUserProfile",
        profile: 'profile',
        getAllAppointments: 'getAllAppointments',
        getAllAppointmentsByDoctor: 'getAllAppointmentsByDoctor',
        getAllMissedAppointmentsByDoctor: 'getAllMissedAppointmentsByDoctor',
        getAllCancelledAppointmentsByDoctor: 'getAllCancelledAppointmentsByDoctor',
        getAllTodayAppointmentsByDoctor: 'getAllTodayAppointmentsByDoctor',
        getAllTodayCompletedAppointmentsByDoctor: 'getAllTodayCompletedAppointmentsByDoctor',
        getAllCompletedAppointmentsByDoctor: 'getAllCompletedAppointmentsByDoctor',
        getAllTodayLaptTestAppointmentByPathology: 'getAllTodayLaptTestAppointmentByPathology',
        filterList: 'filterList',
        appointmentTimeStatusUpdate: 'appointmentTimeStatusUpdate',
        appointmentUpdateTreatmentStatus: 'appointmentUpdateTreatmentStatus',
        appointmentUpdateStatus: 'appointmentUpdateStatus',
        appointmentReschedule: 'appointmentReschedule',
        dailyRecords: 'dailyRecords',
        

        
    }
    if (QeueryParams?.originalUrl) {
        URLs[QeueryParams?.originalUrl] = `${URLs[QeueryParams?.originalUrl] + QeueryParams?.setQuery}`
    }
    return URLs
}

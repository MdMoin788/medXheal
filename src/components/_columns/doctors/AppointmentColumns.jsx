import "../../../styles/variable.less"
import AppointmentTimeUpdateForm from '../../actions/doctors/AppointmentTimeUpdateForm';
import StatusUpdateForm from '../../actions/doctors/StatusUpdateForm';
import TreatmentStatusUpdateForm from '../../actions/doctors/TreatmentStatusUpdateForm';
import RescheduleAppointment from '../../actions/doctors/RescheduleAppointment';


export const AppointmentColumns = [
    {
        name: 'Patient Name',
        selector: row => row?.patient_id?.name,
        sortable: true,
        width: "150px"
    },
    {
        name: 'Timing',
        cell: (row) => <AppointmentTimeUpdateForm row={row} />
        ,
        sortable: true,
        // minWidth: "120px",
        width: "150px"
    },

    {
        name: 'Status',
        cell: (row) => <StatusUpdateForm row={row}/>
        ,
        sortable: true,
        // minWidth: "120px",
        // width: "200px"
        width: "150px"

    },

    
    {
        name: 'Treatment Status',
        cell: (row) => <TreatmentStatusUpdateForm row={row} />
        ,
        sortable: true,
        width: "150px"

    },
    {
        name: 'Re-schedule Appointment Date',
        cell: (row) => <RescheduleAppointment row={row} /> ,
        sortable: true,
        // minWidth: "120px",
        // width: "200px"
        width: "200px"

    },
    // {
    //     name: 'Appointment Date',
    //     selector: row => row?.appointmentDate,
    //     sortable: true,
    //     // minWidth: "120px",
    //     // width: "150px"


    // },
    {
        name: 'Age',
        selector: row => row?.patient_id?.age,
        sortable: true,
        // minWidth: "120px",
        // width: "120px"


    },
    // {
    //     name: 'Time Changes',
    //     selector: row => row.category_name,
    //     sortable: true,
    //     minWidth: "120px",
    //     width: "120px"


    // },
];




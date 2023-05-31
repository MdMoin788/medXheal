import hexToRgba from 'hex-to-rgba';
import {
  menuClasses,
  useProSidebar
} from "react-pro-sidebar";

export const initUser = {
  email: 'admin@gmail.com',
  password: 'admin'
}


export const staffCategories = [
  {
    id: 1,
    category: 'Doctor'
  },
  {
    id: 2,
    category: 'Pathology'
  },
  {
    id: 3,
    category: 'Medical'
  },
  {
    id: 4,
    category: 'Staff'
  },

  {
    id: 5,
    category: 'Hospital Manager'
  },


]


export const mainMenu = [
  {
    name: 'Home',
    path: '/',
    id: 1
  },
  {
    name: 'Services',
    path: '/services',
    id: 2
  },
  {
    name: 'About Us',
    path: '/about-us',
    id: 3
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
    id: 4
  },
]
/// sidebars constant data for sidebars
// export default Sidebars
let hasImage = false
let theme = "dark"

export const collapsMenu = {
  color: "white", border: "none",
  background: "linear-gradient(45deg, #1557cd 0%, #5ae1ff 100%)",
  height: "40px"
}


export const activeSubMenuList = {
  color: "white", border: "none",
  background: "linear-gradient(45deg, #1557cd 0%, #5ae1ff 100%)",
  height: "35px"
}
export const notActiveSubMenuList = {
  height: "35px"
}



export const activeMenuListBasedOnRole = {
  color: "white", border: "none",
  background: "linear-gradient(45deg, #1557cd 0%, #5ae1ff 100%)",
}


export const activeMenuList = {
  color: "white", border: "none",
  background: "linear-gradient(45deg, #1557cd 0%, #5ae1ff 100%)",
  height: "30px"
}


export const notactiveMenuList = {
  height: "30px"

}

export const themes = {
  light: {
    sidebar: {
      backgroundColor: '#ffffff',
      color: '#607489',
    },
    menu: {
      menuContent: '#fbfcfd',
      icon: '#0098e5',
      hover: {
        backgroundColor: '#c5e4ff',
        color: '#44596e',
      },
      disabled: {
        color: '#9fb6cf',
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: '#5aba85',
      color: '#5aba85',
    },
    menu: {
      menuContent: 'whitesmoke',  // this for submenu content like item 1 
      icon: '#3566d3', // this is for icon 
      color: "#6fdefd",
      hover: {
        backgroundColor: '#d6cfbd',
        color: 'black',

      },
      disabled: {
        color: '#3e5e7e',
      },
    },
  },

};


export const menuItemStyles = {
  root: {
    fontSize: '15px',
    fontWeight: 400,
  },
  icon: {
    color: themes[theme].menu.icon,
    [`&.${menuClasses.disabled}`]: {
      color: themes[theme].menu.disabled.color,
    },
  },
  SubMenuExpandIcon: {
    color: '#3566d3',
  },
  subMenuContent: ({ level }) => ({
    backgroundColor:
      level === 0
        ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
        : 'transparent',
  }),
  button: {
    [`&.${menuClasses.disabled}`]: {
      color: themes[theme].menu.disabled.color,
    },
    '&:hover': {
      backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
      color: themes[theme].menu.hover.color,
    },
  },
  label: ({ open }) => ({
    fontWeight: open ? 600 : undefined,
  }),
};



export const subMenuIcon = "fa-solid fa-link"

export const doctors = {
  name: "doctor",
  dailyAppointmentsRoute: "/dashboard/doctor/daily-appointments",
  dailyCompletedAppointmentsRoute: "/dashboard/doctor/daily-completed-appointments",
  oldCompletedAppointmentsRoute: "/dashboard/doctor/old-completed-appointments",
  missedAppointmentsRoute: "/dashboard/doctor/missed-appointments",
  cancelledAppointmentsRoute: "/dashboard/doctor/cancelled-appointments",
  oldTotalAppointmentsRoutes: "/dashboard/doctor/old-appointments",
}



export const pathologies = {
  name: "pathology",
  dailyLapTestsRoute: "/dashboard/pathology/daily-lab-test",
  dailyMissedLabTestRoute: "/dashboard/pathology/dailyfdsfsdfdf",
  oldTotalLabTestsRoute: "/dashboard/pathology/dailyfdsfsdfdf",
}



export const medicals = {
  name: "medical",
  dailyMedicinesRoute: "/dashboard/medical/dailydsfsdfsdfsdf",
  dailyMissedMedicinesRoute: "/dashboard/medical/dailydsfsdfsdfsdf",
  oldTotalMedicinesRoute: "/dashboard/medical/dailydsfsdfsdfsdf",
}


export const patients = {
  name: "patient",
  dailyBookAppointmentRoute: "/dashboard/patient/dailysdfsdfsdfsfds",
  dailyTotalAppointmentRoute: "/dashboard/patient/dailysdfsdfsdfsfds",
  dailyMissedAppointmentRoute: "/dashboard/patient/dailysdfsdfsdfsfds",
}


export const staffs = {
  name: "staff",
  dailyStaffJobRoute: "/dashboard/staff/dailysfsdfsdfsdfdsf",
}

export const admins = {
  name: "hospital-manager",
  addDoctorRoute: "/dashboard/hospital-manager/add-doctor",
  addPatientRoute: "/dashboard/hospital-manager/add-patient",
  addPathologyRoute: "/dashboard/hospital-manager/add-pathology",
  addMedicalRoute: "/dashboard/hospital-manager/add-medical",
  addStaffRoute: "/dashboard/hospital-manager/add-staff",
  AddAdminRoute: "/dashboard/hospital-manager/add-admin",
}
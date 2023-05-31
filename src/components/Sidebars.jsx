import {
    Sidebar,
    Menu,
    MenuItem,
    useProSidebar,
    SubMenu,
} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BiotechIcon from '@mui/icons-material/Biotech';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HealingIcon from '@mui/icons-material/Healing';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { useNavigate } from "react-router-dom";
import "../styles/components/sidebar.less"
import { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import { collapsMenu, activeMenuList, notactiveMenuList, menuItemStyles, activeSubMenuList, notActiveSubMenuList, activeMenuListBasedOnRole, admins, staffs, medicals, pathologies, patients, doctors } from '../constants/data'
// import { toast } from "react-toastify";


// import { Typography } from "@mui/material";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';

function Sidebars() {
    const user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()
    const { collapseSidebar } = useProSidebar();
    const [isMenu, setisMenu] = useState("");
    const [isSubMenu, setisSubMenu] = useState("");
    const { toggleSidebar, collapsed } = useProSidebar();
    const dashboard = () => {
        navigate("/dashboard")
        setisMenu("")
        setisSubMenu("")

    }
    const navigatationHandler = (menu, subMenu) => {
        setisMenu(menu)
        setisSubMenu(subMenu)
        navigate(subMenu)

        // navigate(
        //     subCategory ?
        //         {
        //             pathname: "/dashboard",
        //             search: `?category=${category}&subcategory=${subCategory}`,
        //         }
        //         : {
        //             pathname: "/dashboard",
        //             search: `?category=${category}`,
        //         }
        // );
    }


    const isAllowedUser = {
        // in this file need to be  changes if addition menu is being added then
        doctorAllowedMenu: user?.role == "doctor" || user?.role == "admin" ? false : true,
        pathologyAllowedMenu: user?.role == "pathology" || user?.role == "admin" ? false : true,
        medicalAllowedMenu: user?.role == "medical" || user?.role == "admin" ? false : true,
        patientAllowedMenu: user?.role == "patient" || user?.role == "admin" ? false : true,
        staffAllowedMenu: user?.role == "staff" || user?.role == "admin" ? false : true,
        adminAllowedMenu: user?.role == "admin" ? false : true,


    }
    const isMenuIcon = {
        // in this icon will be added if menu additontion manu is bieng added then 
        doctorIcon: <LocalHospitalIcon />,
        pathologyIcon: <BiotechIcon />,
        medicalIcon: <VaccinesIcon />,
        patientIcon: <HealingIcon />,
        staffIcon: <Diversity3Icon />,
        adminIcon: <Diversity2Icon />



    }
    const subMenuIcon = {
        // in this icon will be added if menu additontion manu is bieng added then 
        Icon: <InsertLinkIcon />,



    }
    const isMainMenuActive = {
        // in this file need to be changes when will add new menu like in sidebar doctor, pathology etc are menu 
        doctorMenu: user?.role == "doctor" ? activeMenuListBasedOnRole : isMenu === "doctor" ? activeMenuList : notactiveMenuList,
        pathologyMenu: user?.role == "pathology" ? activeMenuListBasedOnRole : isMenu === "pathology" ? activeMenuList : notactiveMenuList,
        medicalMenu: user?.role == "medical" ? activeMenuListBasedOnRole : isMenu === "medical" ? activeMenuList : notactiveMenuList,
        patientMenu: user?.role == "patient" ? activeMenuListBasedOnRole : isMenu === "patient" ? activeMenuList : notactiveMenuList,
        staffMenu: user?.role == "staff" ? activeMenuListBasedOnRole : isMenu === "staff" ? activeMenuList : notactiveMenuList,
        adminMenu: user?.role == "admin" ? activeMenuListBasedOnRole : isMenu === "hospital manager" ? activeMenuList : notactiveMenuList,

    }




    const SubMenuActive = {
        // this file need to be changes when will add new sub menu like in sidebar =>>> appointment list, cancel appoint list 
        isActiveDoctor: {
            dailyAppointments: isSubMenu === doctors?.dailyAppointmentsRoute ? activeSubMenuList : notActiveSubMenuList,
            dailyCompletedAppointments: isSubMenu === doctors?.dailyCompletedAppointmentsRoute ? activeSubMenuList : notActiveSubMenuList,
            oldCompletedAppointments: isSubMenu === doctors?.oldCompletedAppointmentsRoute ? activeSubMenuList : notActiveSubMenuList,
            missedAppointments: isSubMenu === doctors?.missedAppointmentsRoute ? activeSubMenuList : notActiveSubMenuList,
            cancelledTotalAppointments: isSubMenu === doctors?.cancelledAppointmentsRoute ? activeSubMenuList : notActiveSubMenuList,
            oldTotalAppointments: isSubMenu === doctors?.oldTotalAppointmentsRoutes ? activeSubMenuList : notActiveSubMenuList,
        },

        isActivePathology: {
            dailyLapTests: isSubMenu === pathologies?.dailyLapTestsRoute ? activeSubMenuList : notActiveSubMenuList,
            dailyMissedLabTest: isSubMenu === pathologies?.dailyMissedLabTestRoute ? activeSubMenuList : notActiveSubMenuList,
            oldTotalLabTests: isSubMenu === pathologies?.oldTotalLabTestsRoute ? activeSubMenuList : notActiveSubMenuList,
        },

        isActiveMedical: {
            dailyMedicines: isSubMenu === medicals?.dailyMedicinesRoute ? activeSubMenuList : notActiveSubMenuList,
            dailyMissedMedicines: isSubMenu === medicals?.dailyMissedMedicinesRoute ? activeSubMenuList : notActiveSubMenuList,
            oldTotalMedicines: isSubMenu === medicals?.oldTotalMedicinesRoute ? activeSubMenuList : notActiveSubMenuList,
        },


        isActivePatient: {
            dailyBookAppointment: isSubMenu === patients?.dailyBookAppointmentRoute ? activeSubMenuList : notActiveSubMenuList,
            dailyTotalAppointment: isSubMenu === patients?.dailyTotalAppointmentRoute ? activeSubMenuList : notActiveSubMenuList,
            dailyMissedAppointment: isSubMenu === patients?.dailyMissedAppointmentRoute ? activeSubMenuList : notActiveSubMenuList,
        },

        isActiveStaff: {
            dailyStaffJob: isSubMenu === staffs?.dailyStaffJobRoute ? activeSubMenuList : notActiveSubMenuList,
        },


        isActiveAdmin: {
            addDoctor: isSubMenu === admins?.addDoctorRoute ? activeSubMenuList : notActiveSubMenuList,
            addPatient: isSubMenu === admins?.addPatientRoute ? activeSubMenuList : notActiveSubMenuList,
            addPathology: isSubMenu === admins?.addPathologyRoute ? activeSubMenuList : notActiveSubMenuList,
            addMedical: isSubMenu === admins?.addMedicalRoute ? activeSubMenuList : notActiveSubMenuList,
            addStaff: isSubMenu === admins?.addStaffRoute ? activeSubMenuList : notActiveSubMenuList,
            AddAdmin: isSubMenu === admins?.AddAdminRoute ? activeSubMenuList : notActiveSubMenuList,
        }

    }

    return (
        < >
            <div className="sideBar-container" >
                <Sidebar transitionDuration={800} breakPoint="sm" >
                    <Menu menuItemStyles={menuItemStyles} suffix={<Badge variant="danger" shape="circle"> 6 </Badge>}>

                        {/* menu items hide and show   */}
                        <MenuItem onClick={() => { collapseSidebar() }} style={collapsMenu} >
                            <div className="d-flex justify-content-start">
                                <span className=" mt-1 fs-5 ms-2"><OpenWithIcon /></span>

                                <h4 className="ms-2 mt-1">MedX-Heal</h4>
                            </div>
                        </MenuItem>

                        {/* Dashboard redirect  */}
                        <MenuItem suffix={<Badge variant="success" >mxk</Badge>} onClick={() => dashboard()} icon={<HomeOutlinedIcon />}> Dashboard </MenuItem>




                        {/* Doctor menu items   */}
                        <SubMenu label="Doctor" onClick={() => navigatationHandler("doctor", null)} disabled={isAllowedUser.doctorAllowedMenu} style={isMainMenuActive?.doctorMenu} icon={isMenuIcon?.doctorIcon} >

                            <MenuItem onClick={() => navigatationHandler(null, doctors?.dailyAppointmentsRoute)} style={SubMenuActive.isActiveDoctor?.dailyAppointments} icon={subMenuIcon?.Icon}  >Daily Appointment</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, doctors?.dailyCompletedAppointmentsRoute)} style={SubMenuActive.isActiveDoctor?.dailyCompletedAppointments} icon={subMenuIcon?.Icon}  >Daily Completed Appointment</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, doctors?.oldCompletedAppointmentsRoute)} style={SubMenuActive.isActiveDoctor?.oldCompletedAppointments} icon={subMenuIcon?.Icon}  >Old Completed Appointment</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, doctors?.missedAppointmentsRoute)} style={SubMenuActive.isActiveDoctor?.missedAppointments} icon={subMenuIcon?.Icon}  >Missed Appointment</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, doctors?.cancelledAppointmentsRoute)} style={SubMenuActive.isActiveDoctor?.cancelledTotalAppointments} icon={subMenuIcon?.Icon}  >Cancelled Appointments</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, doctors?.oldTotalAppointmentsRoutes)} style={SubMenuActive.isActiveDoctor?.oldTotalAppointments} icon={subMenuIcon?.Icon}  >Old Total Appointment</MenuItem>

                        </SubMenu>



                        {/* Pathology menu items   */}
                        <SubMenu label="Pathology" onClick={() => navigatationHandler("pathology", null)} disabled={isAllowedUser.pathologyAllowedMenu} style={isMainMenuActive?.pathologyMenu} icon={isMenuIcon?.pathologyIcon} >

                            <MenuItem onClick={() => navigatationHandler(null, pathologies?.dailyLapTestsRoute)} style={SubMenuActive.isActivePathology?.dailyLapTests} icon={subMenuIcon?.Icon}  >Daily Lab Tests</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, pathologies?.dailyMissedLabTestRoute)} style={SubMenuActive.isActivePathology?.dailyMissedLabTest} icon={subMenuIcon?.Icon}  >Missed Lab Tests</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, pathologies?.oldTotalLabTestsRoute)} style={SubMenuActive.isActivePathology?.oldTotalLabTests} icon={subMenuIcon?.Icon}  >Old Total Lab Tests</MenuItem>

                        </SubMenu>


                        {/* Medical menu items  */}
                        <SubMenu label="Medical" onClick={() => navigatationHandler("medical", null)} disabled={isAllowedUser.medicalAllowedMenu} style={isMainMenuActive?.medicalMenu} icon={isMenuIcon?.medicalIcon}>

                            <MenuItem onClick={() => navigatationHandler(null, medicals?.dailyMedicinesRoute)} style={SubMenuActive.isActiveMedical?.dailyMedicines} icon={subMenuIcon?.Icon}  >Daily  Medicines</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, medicals?.dailyMissedMedicinesRoute)} style={SubMenuActive.isActiveMedical?.dailyMissedMedicines} icon={subMenuIcon?.Icon}  >Missed  Medicines</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, medicals?.oldTotalMedicinesRoute)} style={SubMenuActive.isActiveMedical?.oldTotalMedicines} icon={subMenuIcon?.Icon}  >Old Total Medicines</MenuItem>

                        </SubMenu>





                        {/* patient menu items  */}
                        <SubMenu label="Patient" onClick={() => navigatationHandler("patient", null)} disabled={isAllowedUser.patientAllowedMenu} style={isMainMenuActive?.patientMenu} icon={isMenuIcon?.patientIcon} >

                            <MenuItem onClick={() => navigatationHandler(null, patients?.dailyBookAppointmentRoute)} style={SubMenuActive.isActivePatient?.dailyBookAppointment} icon={subMenuIcon?.Icon}  >Daily Book Appointment</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, patients?.dailyTotalAppointmentRoute)} style={SubMenuActive.isActivePatient?.dailyTotalAppointment} icon={subMenuIcon?.Icon}  >Daily Total Appointments</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, patients?.dailyMissedAppointmentRoute)} style={SubMenuActive.isActivePatient?.dailyMissedAppointment} icon={subMenuIcon?.Icon}  >Daily Missed Appointments</MenuItem>

                        </SubMenu>





                        {/* Staff menu items  */}
                        <SubMenu label="Staff" onClick={() => navigatationHandler("staff", null)} disabled={isAllowedUser.staffAllowedMenu} style={isMainMenuActive?.staffMenu} icon={isMenuIcon?.staffIcon} >

                            <MenuItem onClick={() => navigatationHandler(null, staffs?.dailyStaffJobRoute)} style={SubMenuActive.isActiveStaff?.dailyStaffJob} icon={subMenuIcon?.Icon}  > Daily Job List </MenuItem>

                        </SubMenu>




                        {/* hostpital or admin manu items   */}
                        <SubMenu label="Hospital Manager" onClick={() => navigatationHandler("hospital manager", null)} disabled={isAllowedUser.adminAllowedMenu} style={isMainMenuActive?.adminMenu} icon={isMenuIcon?.adminIcon} >

                            <MenuItem onClick={() => navigatationHandler(null, admins?.addDoctorRoute)} style={SubMenuActive.isActiveAdmin?.addDoctor} icon={subMenuIcon?.Icon} >Add Doctor</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, admins?.addPatientRoute)} style={SubMenuActive.isActiveAdmin?.addPatient} icon={subMenuIcon?.Icon} >Add Patient</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, admins?.addPathologyRoute)} style={SubMenuActive.isActiveAdmin?.addPathology} icon={subMenuIcon?.Icon} >Add Pathology</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, admins?.addMedicalRoute)} style={SubMenuActive.isActiveAdmin?.addMedical} icon={subMenuIcon?.Icon} >Add Medical</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, admins?.addStaffRoute)} style={SubMenuActive.isActiveAdmin?.addStaff} icon={subMenuIcon?.Icon} >Add Staff</MenuItem>
                            <MenuItem onClick={() => navigatationHandler(null, admins?.AddAdminRoute)} style={SubMenuActive.isActiveAdmin?.AddAdmin} icon={subMenuIcon?.Icon} >Add Admin</MenuItem>

                        </SubMenu>

                        {/* Add extra menu items here below ................... */}

                    </Menu>
                </Sidebar>

                <main className="toggle-btn">
                    <div className="toggle-btns-raf">
                        <button className="sb-button toggle-btns-button" onClick={() => toggleSidebar()}>
                            <MenuOutlinedIcon />
                        </button>
                    </div>
                </main>
            </div >




        </>
    );
}


export default Sidebars








// menuItemStyles={{
//     button: ({ level, active, disabled }) => {
//         if (level === 0)
//             return {
//                 color: disabled ? 'white' : 'white',
//                 background: active ? 'red' : "red",
//                 borderBottom: ".5px solid white",
//                 background: "linear-gradient(45deg, rgb(21, 87, 205) 0%, rgb(90, 225, 255) 100%)"
//             };
//     },
// }}




//---------------------



// {/* <MenuItem
//                             style={{
//                                 color: "#519ff7", border: "none"
//                             }}
//                             onClick={() => navigate("/dashboard")}
//                         >
//                             <div style={{ position: "absolute", top: "20%", zIndex: 1 }}>
//                                 <Typography
//                                     // variant="body2"
//                                     fontWeight={600}
//                                 >
//                                     Teams
//                                 </Typography>
//                             </div>
//                         </MenuItem> */}


// {/* <i class="fa-solid fa-arrow-right"></i> */ }
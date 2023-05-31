import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.less'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Redux/store.js'
import { AppRoutes } from './routes/AppRoutes.jsx'
import { Navbar } from './pages/Navbar';
import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebars from './components/Sidebars';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "@popperjs/core"; 
import "bootstrap";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const token = JSON.parse(localStorage.getItem("user-tokens")) || ""


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        
        <ProSidebarProvider>
          <Navbar />
          {
            token && <Sidebars />
          }
          <AppRoutes />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
        </ProSidebarProvider>
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);

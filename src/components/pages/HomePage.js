import React, {useEffect} from 'react';
import ResponsiveNavbar from "../ResponsiveNavbar";
import {CollapsibleSidebar} from "../CollapsibleSidebar";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Dashboard} from "../fragments/Dashboard";
import {Archive} from "../fragments/Archive";

import Fab from '@mui/material/Fab';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import "./pages.css"
import {AddEstimationPage} from "./AddEstimationPage";
import {Estimations} from "../fragments/Estimations";
import PaymentPage from "./PaymentPage";
import MyEmployeesPage from './MyEmployeesPage';
import Cookies from "universal-cookie";
import {showToast} from "../../App";

const cookies = new Cookies();


export const HomePage = () => {

    let navigate = useNavigate();

    useEffect(() => {
        // check cookies for logged in
        if (cookies.get("token") === undefined || cookies.get("token") == null) {
            showToast('You must log in to continue', 'error')
            navigate('/login')
        }


    }, []);


    return (
        <div>
            <ResponsiveNavbar/>

            <div className='fab' onClick={() => {
                navigate("/add-estimation")
            }}>
                <Fab color="primary" variant="extended">
                    <CreateNewFolderOutlinedIcon/>
                    &nbsp;&nbsp;&nbsp;Add new Estimation
                </Fab>
            </div>

            <div className="row">
                <div className="col-sm-2 col-md-2"><CollapsibleSidebar/></div>

                <div className="col-sm-10 col-md-10">
                    <div className="me-5">
                        <Routes>
                            <Route exact path="/" element={<Dashboard/>}/>
                            <Route exact path="/archive" element={<Archive/>}/>
                            <Route exact path="/estimations" element={<Estimations/>}/>
                            <Route exact path="/add-estimation" element={<AddEstimationPage/>}/>
                            <Route exact path="/my-employees" element={<MyEmployeesPage/>}/>
                            <Route exact path="/payment" element={<PaymentPage/>}/>
                        </Routes>
                    </div>
                </div>


            </div>
        </div>
    );
}
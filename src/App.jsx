import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import store from "./components/redux/store/store";
import {Provider} from "react-redux";
import FormLogin from "./components/Login/FormLogin";
import Home from "./components/Home/Home";
import 'react-toastify/dist/ReactToastify.css';
import HomeAdmin from "./components/Home/HomeAdmin";
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                    <Routes>
                        <Route path={"/login"} element={<FormLogin/>}/>
                        <Route path={"/home"} element={<Home/>}>

                        </Route>
                        <Route path={"/admin"} element={<HomeAdmin/>}>

                        </Route>
                        <Route path="/" element={<Navigate to="/login" replace/>}/>
                    </Routes>
                    <ToastContainer/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

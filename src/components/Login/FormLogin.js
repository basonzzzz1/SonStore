import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {updateUserToken} from "../redux/actions/userActions";
import UserService from "../sevice/UserService";
import {Navigate} from "react-router-dom";
import Modal from "react-modal";

import "./FormLogin.css"
const FormLogin = () => {
    const [sectionLogin, setSectionLogin] = useState(0)
    const [user, setUser] = useState({});
    const [userRGT, setUserRGT] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [isLoginAdmin, setIsLoginAdmin] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsBannedOpen, setModalIsBannedOpen] = useState(false);
    const dispatch = useDispatch();
    const selectLogin = () => {
        const registerSec = document.querySelector('.register-section');
        registerSec.style.transition = 'transform 1s';
        registerSec.style.transform = 'translateY(-800px)';
        setTimeout(() => {
            setSectionLogin(0);
        }, 300);
    };

    const selectRegister = () => {
        const loginSec = document.querySelector('.login-section');

        loginSec.style.transition = 'transform 1s';
        loginSec.style.transform = 'translateY(-800px)';
        setTimeout(() => {
            setSectionLogin(1);
        }, 300);
    };
    useEffect(() => {
        if (sectionLogin == 0) {
            setTimeout(() => {
                effectLogin()
            }, 100);
        } else {
            setTimeout(() => {
                effectRegister()
            }, 100);
        }
    }, [sectionLogin]);
    const effectLogin = () => {
        const loginSec = document.querySelector('.login-section');
        loginSec.style.transition = 'transform 1s';
        loginSec.style.transform = 'translateY(0px)';
    }
    const effectRegister = () => {
        const registerSec = document.querySelector('.register-section');
        registerSec.style.transition = 'transform 1s';
        registerSec.style.transform = 'translateY(0px)';
    }
    const validateSchemaLogin = Yup.object().shape({
        username: Yup.string()
            .matches(/^[a-zA-Z0-9]*$/, 'Tên Người dùng không thể chứa ký tự đặc biệt')
            .required("Tên người dùng không thể để trống"),
        password: Yup.string()
            .required("Mật khẩu không thể để trống")
            .test('no-spaces', 'Mật khẩu không được chứa dấu cách', value => !/\s/.test(value)),
    })
    const validateSchemaRegister = Yup.object().shape({
        usernameRGT: Yup.string()
            .matches(/^[a-zA-Z0-9]*$/, 'Tên Người dùng không thể chứa ký tự đặc biệt')
            .required("Tên người dùng không thể để trống"),
        passwordRGT: Yup.string()
            .required("Mật khẩu không thể để trống")
            .test('no-spaces', 'Mật khẩu không được chứa dấu cách', value => !/\s/.test(value)),
        passwordContinue: Yup.string()
            .required("Mật khẩu không trùng nhau")
            .oneOf([Yup.ref('passwordRGT'), null], 'Mật khẩu không khớp')
            .test('no-spaces', 'Mật khẩu không được chứa dấu cách', value => !/\s/.test(value)),
        phone: Yup.string()
            .matches(/^\d{10,15}$/, 'Số điện thoại Không đúng định dạng !')
            .required("Số điẹn thoại không thể để trống")
            .test('no-spaces', 'Số điẹn thoại không được chứa khoảng trống', value => !/\s/.test(value)),
    });
    const loginIn = async () => {
        try {
            const response = await UserService.login(user);
            localStorage.setItem("userToken", JSON.stringify(response.data.accessToken));
            console.log(response)
            localStorage.setItem("idAccount", JSON.stringify(response.data.id));
            localStorage.setItem("account", JSON.stringify(response.data));
            dispatch(updateUserToken(response.data));
            if ((response.data.roles[0] == "ROLE_USER" && response.data.roles[1] == "ROLE_ADMIN") || (response.data.roles[0] == "ROLE_ADMIN" && response.data.roles[1] == "ROLE_USER")) {
                setModalIsOpen(true)
            } else if (response.data.roles[0] == "ROLE_ADMIN") {
                setIsLogin(true);
                // setIsLoginAdmin(true)
                toast.success("Đăng nhập thành công !");
            } else if (response.data.banner) {
                setIsLogin(true);
                // setModalIsBannedOpen(true)
                toast.error("tài khoản của bạn đã bị khóa !")
            } else {
                setIsLogin(true);
                toast.success("Đăng nhập thành công !");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.warning("Tài khoản hoặc mật khẩu không đúng !")
            await checkLogin(user);
        }
    }
    const register = async () => {
        try {
            const userRegister = {
                username: userRGT.usernameRGT,
                phone: userRGT.phone,
                role: ["user"],
                password: userRGT.passwordRGT
            };
            const response = await UserService.register(userRegister)
                .then((response) => {
                    let userNew = {
                        username: userRGT.usernameRGT,
                        password: userRGT.passwordRGT
                    }
                    UserService.login(userNew).then((response) => {
                        localStorage.setItem("userToken", JSON.stringify(response.data.accessToken));
                        localStorage.setItem("idAccount", JSON.stringify(response.data.id));
                        localStorage.setItem("account", JSON.stringify(response.data));
                        dispatch(updateUserToken(response.data));
                        if ((response.data.roles[0] == "ROLE_USER" && response.data.roles[1] == "ROLE_ADMIN") || (response.data.roles[0] == "ROLE_ADMIN" && response.data.roles[1] == "ROLE_USER")) {
                            // setModalIsOpen(true)
                        } else if (response.data.roles[0] == "ROLE_ADMIN") {
                            // setIsLoginAdmin(true)
                            toast.success("Đăng nhập thành công !");
                        } else if (response.data.banner) {
                            // setModalIsBannedOpen(true)
                            toast.error("tài khoản của bạn đã bị khóa !")
                        } else {
                            setIsLogin(true);
                            toast.success("Đăng nhập thành công !");
                        }
                    }).catch((err) => {
                        console.log(err)
                    });
                }).catch((err) => {
                    console.log(err)
                });
            console.log(response)
            document.getElementById("login-link").click();
            toast.success("đăng ký thành công !")
        } catch (error) {
            console.error("Error:", error);
        }
    }
    const checkLogin = async (user) => {
        try {
            const response = await UserService.checkLogin(user);
            if (response.data.includes("username")) {
                toast.error("Tên người dùng sai");
            }
            if (response.data.includes("password")) {
                toast.error("Mật khẩu sai");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    const loginAdmin = () => {
        setIsLoginAdmin(true)
    }
    const loginUser = () => {
        setIsLogin(true)
    }
    const changeInputLogin = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }
    const changeInputRGT = (event) => {
        const {name, value} = event.target;
        setUserRGT({...userRGT, [name]: value});
    }
    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className={"form-login"}>
            <section>
                {sectionLogin == 0 ?
                    <div className="login-section" style={{transform: 'translateY(-800px)'}}>
                        <Formik initialValues={
                            {
                                username: '',
                                password: ''
                            }
                        }
                                validationSchema={validateSchemaLogin}
                                onSubmit={(values) => {
                                    loginIn().then(console.log(values)).catch();
                                }}>
                            <Form>
                                <h1>đăng nhập</h1>
                                <div className={"inputbox"}>
                                    <ion-icon name={"mail-outline"}></ion-icon>
                                    <Field type="text" name={"username"} autoComplete="off" required
                                           onInput={changeInputLogin}/>
                                    <ErrorMessage name="username" component="div" className="text-danger"/>
                                    <label htmlFor="">Tài khoản</label>
                                </div>
                                <div className={"inputbox"}>
                                    <ion-icon name={"lock-closed-outline"}></ion-icon>
                                    <Field type="password" autoComplete="off" name={"password"} required
                                           onInput={changeInputLogin}/>
                                    <ErrorMessage name="password" component="div" className="text-danger"/>
                                    <label htmlFor="">Mật khẩu</label>
                                </div>
                                <div className={"forget"}>
                                    <label htmlFor=""><input type="checkbox"/>Đồng ý điều khoản</label>
                                    <a href="#">quên mật khẩu</a>
                                </div>
                                <button>Đăng nhập</button>
                                <div className={"register"}>
                                    <p>bạn chưa có tài khoản <a href="#" onClick={selectRegister}
                                                                className={"register-link"}>Đăng ký</a></p>
                                </div>
                            </Form>
                        </Formik>
                    </div> : <></>
                }
                {sectionLogin == 1 ?
                    <div className="register-section" style={{transform: 'translateY(-800px)'}}>
                        <h1>đăng ký</h1>
                        <div className={"inputbox"}>
                            <ion-icon name={"mail-outline"}></ion-icon>
                            <input type="text" required/>
                            <label htmlFor="">Tài khoản</label>
                        </div>
                        <div className={"inputbox"}>
                            <ion-icon name={"lock-closed-outline"}></ion-icon>
                            <input type="password" required/>
                            <label htmlFor="">Mật khẩu</label>
                        </div>
                        <div className={"inputbox"}>
                            <ion-icon name={"lock-closed-outline"}></ion-icon>
                            <input type="password" required/>
                            <label htmlFor="">Xác nhận mật khẩu</label>
                        </div>
                        <div className={"forget"}>
                            <label htmlFor=""><input type="checkbox"/>Đồng ý điều khoản</label>
                            <a href="#">quên mật khẩu</a>
                        </div>
                        <button>Đăng ký</button>
                        <div className={"register"}>
                            <p>bạn đã có tài khoản <a href="#" onClick={selectLogin} className={"register-link"}>Đăng
                                nhập</a></p>
                        </div>
                    </div> : <></>
                }
            </section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        maxWidth :"300px",
                        height: "80px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        position :"relative",
                        border: "1px solid rgba(255,255,255,0.5)",
                        scroll: "none",
                        overflow: "hidden",
                        backgroundColor: "rgba(0,24,201,0.5)",
                        borderRadius :"10px",
                        backdropFilter:"blur(55px)",
                        justifyContent :"center",
                        alignItems :"center",
                        padding :"2rem 3rem"
                    },
                }}
                id="myCustomModalId"
            >
                <div style={{display: "flex"}}>
                    <button onClick={() => loginUser()}
                            style={{height: "40px", marginLeft: "0px"}}>
                        Người dùng
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </button>
                    <button onClick={() => loginAdmin()}
                            style={{height: "40px", marginLeft: "20px"}}>
                        Quản Lý
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </button>
                </div>
            </Modal>
            {isLogin && <Navigate to="/home"/>}
            {isLoginAdmin && <Navigate to="/admin"/>}
        </div>
    );
};

export default FormLogin;
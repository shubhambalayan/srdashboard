import React,{useState} from 'react'
import axios from 'axios'
import {API} from '../../Backend'
import {useNavigate} from 'react-router-dom'

const Login=()=> {
    const [userId,setUserId]=useState();
    const [password,setPassword]=useState();
    const [error,setError]=useState()
    const navigate = useNavigate();

    const submit=()=>{
        if(userId.trim().length===0 || password.trim().length===0){
            setError("All Fields Required")
        }else{
            axios.post(`${API}/api/users/login`,{username:userId,password}).then((res)=>{
                console.log(res)
                navigate('/')
            })
        }
    }

    return (
        <div className="d-flex flex-column flex-lg-row flex-column-fluid min-vw-100 min-vh-100">
            <div className="d-flex flex-column flex-lg-row-auto bg-primary w-xl-600px positon-xl-relative">
                <div className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
                    <div className="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
                        <a href="./index.html" className="py-9 pt-lg-20">
                            <img alt="Logo" src="./assets/media/logos/default.svg" className="h-40px" />
                        </a>
                        <h1 className="fw-bolder text-white fs-2qx pb-5 pb-md-10">Welcome to SilkRoute</h1>
                        <p className="fw-bold fs-2 text-white">Plan your blog post by choosing a topic creating
                            <br />an outline and checking facts</p>
                    </div>
                    <div className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"
                        style={{backgroundImage: "url(./assets/media/illustrations/sketchy-1/1.png)"}}></div>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row-fluid py-10">
                <div className="d-flex flex-center flex-column flex-column-fluid">
                    <div className="w-lg-500px p-10 p-lg-15 mx-auto">
                        {/* <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate="novalidate"
                            id="kt_sign_in_form" data-kt-redirect-url="./index.html" action="#"> */}
                            <div className="text-center mb-10">
                                <h1 className="text-dark mb-3">Sign In to SilkRoute </h1>
                                <div className="text-gray-400 fw-bold fs-4">New Here?
                                    <a href="./authentication/sign-up/basic.html" className="link-primary fw-bolder"> Create an
                                        Account</a></div>
                            </div>
                            <div className="fv-row mb-10 fv-plugins-icon-container">
                                <label className="form-label fs-6 fw-bolder text-dark">UserID</label>
                                <input className="form-control form-control-lg form-control-solid" type="text" name="username" onChange={(e)=>setUserId(e.target.value)} />
                                <div className="fv-plugins-message-container invalid-feedback"></div>
                            </div>
                            <div className="fv-row mb-10 fv-plugins-icon-container">
                                <div className="d-flex flex-stack mb-2">
                                    <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                                    <a href="./authentication/sign-in/password-reset.html"
                                        className="link-primary fs-6 fw-bolder">Forgot Password ?</a>
                                </div>
                                <input className="form-control form-control-lg form-control-solid" type="password"
                                    name="password" onChange={(e)=>setPassword(e.target.value)} />
                                <div className="fv-plugins-message-container invalid-feedback"></div>
                            </div>
                            <div className="fv-row mb-10 fv-plugins-icon-container">
                                            <label className="form-check form-check-custom form-check-solid form-check-inline">
                                                <input className="form-check-input" type="checkbox" name="toc" value="1" checked/>
                                                <span className="form-check-label fw-bold text-gray-700 fs-6">Remember me
                                                </span>
                                            </label>
                                        <div className="fv-plugins-message-container invalid-feedback"></div></div>
                            <div className="text-center">
                                <button  className="btn btn-lg btn-primary w-100 mb-5">
                                    <span className="indicator-label" onClick={submit}>Continue</span>
                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                </button>
                            </div>
                            <div></div>
                        {/* </form> */}
                    </div>
                </div>
                <div className="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
                    <div className="d-flex flex-center fw-bold fs-6">
                        <a href="https://keenthemes.com" className="text-muted text-hover-primary px-2"
                            target="_blank">About</a>
                        <a href="https://devs.keenthemes.com" className="text-muted text-hover-primary px-2"
                            target="_blank">Support</a>
                        <a href="https://themes.getbootstrap.com/product.-bootstrap-5-admin-dashboard-template"
                            className="text-muted text-hover-primary px-2" target="_blank">Purchase</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
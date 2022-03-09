import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {API} from '../../Backend'

const Signup=()=> {
    const [userId,setUserId]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const [error,setError]=useState()
    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            setError("")
        },3000)
    },[error])
    
    const submit=()=>{
        if(userId.trim().length===0 || password.trim().length===0 || confirmPassword.trim().length===0){
            setError("All Fields Required")
        }else if(password !== confirmPassword){
            setError("Confirm Password not matched")
        }else{
            axios.post(`${API}/api/users/checkuser`,{username:userId}).then((res)=>{
                console.log('res',res)
                if(res.data.success===true){
                    navigate('/onboarding');
                }
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
                             data-kt-redirect-url="./index.html" action="#"> */}
                            <div className="text-center mb-10">
                                <h1>{error}</h1>
                                <h1 className="text-dark mb-3">Create an Account</h1>
                                <div className="text-gray-400 fw-bold fs-4">Already have an account?
                                    <a href="./authentication/sign-up/basic.html" className="link-primary fw-bolder"> Sign in
                                        here</a></div>
                            </div>
                            <div className="fv-row mb-10 fv-plugins-icon-container">
                                <label className="form-label fs-6 fw-bolder text-dark">UserID</label>
                                <input className="form-control form-control-lg form-control-solid" type="text" name="username" autoComplete="off" onChange={(e)=>setUserId(e.target.value)} />
                                <div className="fv-plugins-message-container invalid-feedback"></div>
                            </div>
                            <div className="mb-10 fv-row fv-plugins-icon-container" data-kt-password-meter="true">
                                <div className="mb-1">
                                    <label className="form-label fw-bolder text-dark fs-6">Password</label>
                                    <div className="position-relative mb-3">
                                        <input className="form-control form-control-lg form-control-solid" type="password"
                                            placeholder="" name="password" autoComplete="off" onChange={(e)=>setPassword(e.target.value)}/>
                                        <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                                            data-kt-password-meter-control="visibility">
                                            <i className="bi bi-eye-slash fs-2"></i>
                                            <i className="bi bi-eye fs-2 d-none"></i>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                                    </div>
                                </div>
                                <div className="text-muted">Use 8 or more characters with a mix of letters, numbers &amp; symbols.
                                </div>
                                <div className="fv-plugins-message-container invalid-feedback"></div>
                            </div>
                            <div className="fv-row mb-5 fv-plugins-icon-container">
                                <label className="form-label fw-bolder text-dark fs-6">Confirm Password</label>
                                <input className="form-control form-control-lg form-control-solid" type="password" placeholder=""
                                    name="confirm-password" autoComplete="off" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                                <div className="fv-plugins-message-container invalid-feedback"></div>
                            </div>

                        
                            <div className="text-center mt-10">
                                <button className="btn btn-lg btn-primary w-100 mb-5">
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

export default Signup
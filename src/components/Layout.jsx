import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='d-flex flex-column flex-root'>
        <div className='page d-flex flex-row flex-column-fluid'>
            <Navbar/>
            <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
                <div className='header align-items-stretch' id='kt_header'>
                    <div className="header-brand">
							<a href="/good/index.html">
								<img alt="Logo" src="./assets/media/logos/default.svg" className="h-25px"/>
							</a>
							<div className="d-none d-lg-block">
								<button className="btn btn-icon btn-color-gray-500 w-auto px-0 btn-active-color-primary" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-overflow="true">
									<span className="svg-icon svg-icon-1 me-n1">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="black"></path>
											<path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="black"></path>
										</svg>
									</span>
								</button>
							</div>
							<div className="d-flex align-items-center d-lg-none ms-n3 me-1" title="Show aside menu">
								<div className="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_aside_mobile_toggle">
									<span className="svg-icon svg-icon-1">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black"></path>
											<path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black"></path>
										</svg>
									</span>
								</div>
							</div>
					</div>
                    <div className="topbar">
                        <div className="container-fluid py-6 py-lg-0 d-flex flex-column flex-sm-row align-items-lg-stretch justify-content-sm-between">
                            <div className="page-title d-flex flex-column me-5">
                                <h1 className="d-flex flex-column text-dark fw-bolder fs-2 mb-0">Dashbaord</h1>
                                <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                                    <li className="breadcrumb-item text-muted">
                                        <a href="/good/index.html" className="text-muted text-hover-primary">Home</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <span className="bullet bg-gray-300 w-5px h-2px"></span>
                                    </li>
                                    <li className="breadcrumb-item text-muted">Dashboards</li>
                                    <li className="breadcrumb-item">
                                        <span className="bullet bg-gray-300 w-5px h-2px"></span>
                                    </li>
                                    <li className="breadcrumb-item text-dark">Homepage</li>
                                </ul>
                            </div>
                            <div className='d-flex align-items-center pt-3 pt-sm-0'>
                                <p>Settings</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content" id='kt_content'>
                    <div className="container-fluid" id='kt_content_container'>
                        {children}
                    </div>
                </div>
                    <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Layout
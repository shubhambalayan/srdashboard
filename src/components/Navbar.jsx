import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="kt_aside" className="aside" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
        <div className="aside-menu flex-column-fluid">
            <div className="hover-scroll-overlay-y px-2 my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="{default: '#kt_aside_toolbar, #kt_aside_footer', lg: '#kt_header, #kt_aside_toolbar, #kt_aside_footer'}" data-kt-scroll-offset="0" style={{height: "606px"}}>
                <div className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold" id="#kt_aside_menu" data-kt-menu="true">	
                    <div className="menu-item">
                        <a href="/" className="menu-link">
                            <span className="menu-icon">
                                <span className="svg-icon svg-icon-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black"></path>
                                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black"></path>
                                    </svg>
                                </span>
                            </span>
                            <span className="menu-title">Homepage</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="/login" className="menu-link">
                            <span className="menu-icon">
                                <span className="svg-icon svg-icon-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black"></path>
                                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black"></path>
                                    </svg>
                                </span>
                            </span>
                            <span className="menu-title">Login</span>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="/signup" className="menu-link">
                            <span className="menu-icon">
                                <span className="svg-icon svg-icon-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black"></path>
                                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black"></path>
                                    </svg>
                                </span>
                            </span>
                            <span className="menu-title">Signup</span>
                        </a>
                    </div>
					<div className="menu-item">
                        <a href="/onboarding" className="menu-link">
                            <span className="menu-icon">
                                <span className="svg-icon svg-icon-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black"></path>
                                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black"></path>
                                    </svg>
                                </span>
                            </span>
                            <span className="menu-title">Onboarding</span>
                        </a>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
									<span className="menu-link">
										<span className="menu-icon">
											<span className="svg-icon svg-icon-5">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="black"></path>
													<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="black"></path>
												</svg>
											</span>
										</span>
										<span className="menu-title">Settings</span>
										<span className="menu-arrow"></span>
									</span>
									<div className="menu-sub menu-sub-accordion menu-active-bg" kt-hidden-height="179" style={{display: "none", overflow: "hidden"}}>
										<div className="menu-item">
											<a href="/storedesign" className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Store Design</span>
											</a>
										</div>
										<div className="menu-item">
											<a href="/modulesettings" className="menu-link">
												<span className="menu-bullet">
													<span className="bullet bullet-dot"></span>
												</span>
												<span className="menu-title">Module Settings</span>
											</a>
										</div>
									</div>
								</div>
                </div>
            </div>
        </div>
        <a href="/settings" className="aside-footer flex-column-auto pb-5" id="kt_aside_footer">
						<div className="aside-user">
							<div className="aside-user d-flex align-items-sm-center justify-content-center py-5">
								<div className="me-5">
									<div className="symbol symbol-40px cursor-pointer" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-overflow="true">
										<img src="./assets/media/avatars/300-1.jpg" alt=""/>
									</div>
								</div>
								<div className="flex-row-fluid flex-wrap">
									<div className="d-flex align-items-center flex-stack">
										<div className="me-2">
											<a className="text-gray-800 text-hover-primary fs-6 fw-bold lh-0">Paul Melone</a>
											<span className="text-gray-400 fw-bold d-block fs-8">Python Dev</span>
										</div>
										<a data-bs-toggle="tooltip" title="" data-bs-original-title="End session and singout">
											<span className="svg-icon svg-icon-2 svg-icon-gray-400">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<rect opacity="0.3" width="12" height="2" rx="1" transform="matrix(-1 0 0 1 15.5 11)" fill="black"></rect>
													<path d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z" fill="black"></path>
													<path d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z" fill="#C4C4C4"></path>
												</svg>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</a>
    </div>
  )
}

export default Navbar

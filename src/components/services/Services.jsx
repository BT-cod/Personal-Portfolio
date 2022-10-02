import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web-Page <br /> Designer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                <i className="bx bx-right-arrow-alt services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>


                        <h3 className="services__modal-title">WEB-PAGE DEVELOPER</h3>
                        <p className="services__modal-description">Providing Quality Work To Clients And Companies.Seeking For Opportunity To Exhibit My Skills</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I Develop The Frontend Part Of Web-site And User-Interface</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web-Site Development</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I Position Your Company Brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Web Developer <br /> Front-End Developer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More 
                <i className="bx bx-right-arrow-alt  services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>


                        <h3 className="services__modal-title">WEB DEVELOPER</h3>
                        <p className="services__modal-description">Providing Quality Work To Clients And Companies.Seeking For Opportunity To Exhibit My Skills</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I Develop The Frontend Part Of Web-site And User-Interface</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web-Site Development</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I Position Your Company Brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Web-site Design <br /> Web-Designer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>
                    View More 
                <i className="bx bx-right-arrow-alt  services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>


                        <h3 className="services__modal-title">WEB DESIGNER</h3>
                        <p className="services__modal-description">Providing Quality Work To Clients And Companies.Seeking For Opportunity To Exhibit My Skills</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I Develop The Frontend Part Of Web-site And User-Interface</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web-Site Development</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I Position Your Company Brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
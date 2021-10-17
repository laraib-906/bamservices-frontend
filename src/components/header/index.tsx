import React from 'react';
import { IRouters } from '../../types/routes';
import { IUser } from '../../types/user';
import "./header.css";

import GetSimImage from '../../assert/get_sim.png';
import Logo from '../../assert/logo.jpeg';
import Navbar from '../../components/navbar';

interface Props {
    user: IUser;
    routes: IRouters[],
}

const Header = (props: Props) => {
    return (
        <>
            <div className="container bg-white">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-6">
                        <a href="/#" onClick={(ev) => { ev.preventDefault(); }}>
                            <img src={Logo} alt="Bam Logo" className="logo" />
                        </a>
                    </div>
                    <div className="logo-theme-bg bg-white"></div>
                    <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                        <div className="contact-wrapper col-lg-4 col-md-4 col-sm-5 col-xs-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-6">
                                    <span className="phone">(0) 207 243 1119</span>
                                    <br />
                                    sales@ayapa.co.uk
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-6">
                                    <a href="">
                                        <img src={GetSimImage}
                                            alt=""
                                            title="Order your free SIM"
                                            style={{
                                                border: 0,
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar routes={props.routes} />
        </>
    )
}

export default Header;

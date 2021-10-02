import React from 'react';
import { IRouters } from '../../types/routes';
import { IUser } from '../../types/user';
import "./header.css";

import GetSimImage from '../../assert/get_sim.png';
import Navbar from '../../components/navbar';

interface Props {
	user: IUser;
	routes: IRouters[],
}

const Header = (props: Props) => {
    return (
        <>
        <div className="container mt-2">
            <div className="row">
                <div className="logo-theme-bg"></div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-10">
                     <a href="#">
                        <div className="logo"></div>
                     </a>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                     <div className="contact-wrapper col-lg-4 col-md-4 col-sm-5 col-xs-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-6">
                                <span className="phone">(0) 207 243 1119</span>
                                <br/>
                                sales@ayapa.co.uk
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-6">
                                <a href="#">
                                    <img src={GetSimImage} 
                                        alt="Order you free sim" 
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

import React from 'react';
import { IRouters } from '../../types/routes';
import { IUser } from '../../types/user';
import "./header.css";

import GetSimImage from '../../assert/get_sim.png';
import LogoStart from '../../assert/bam_logo.jpeg';
import LogoEnd from '../../assert/logo.jpeg';
import Navbar from '../../components/navbar';

interface Props {
    user: IUser;
    routes: IRouters[],
}

const Header = (props: Props) => {
    return (
        <>
            <div className="container bg-white">
                <div className="header-container">
                    <div className="logo-container">
                        <img src={LogoStart} alt="Bam Logo Start" className="logo-theme-bg" />
                        <img src={LogoEnd} alt="Bam Logo End" className="logo" />
                    </div>
                    <div className="display-contact-container">
                        <div >
                            <span className="phone">(0) 207 243 1119</span>
                            <br />
                            sales@ayapa.co.uk
                        </div>
                        <div >
                            <button className="header-get-sims-button">Get Free Sims</button>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar routes={props.routes} />
        </>
    )
}

export default Header;

import Banner from '../../components/banner';
import React from 'react';
import bannerImage from "../../assert/service_banner.jpg";
import s1 from "../../assert/service/s1.jpg";

const Services = () => {
    return (
        <div>
            <Banner bannerType="banner" bannerImage={bannerImage} />
            <div className="page">
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="caps">Sim Distribution.</h3>
                            <p>We work with some of the world’s leading mobile network providers whose sim cards are distributed across the nation the retailers by our team. Our distribution firm helps the network providers to connect with retailers and end users effortlessly.  </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-lxs-12">
                        <h3 className="caps">Accessories Distribution.</h3>
                        <p>We distribute mobile accessories that is helps mobile users to purchase directly from the retailers. We supply our own branded and third-party accessories for various devices for the end users benefits and choices. </p>
                        <br />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-lxs-12">
                        <h3 className="caps">Marketing Services</h3>
                        <ul style={{ marginLeft:-25 }}>
                            <li>Promotional activities </li>
                            <li>Merchandising </li>
                            <li>PoS design and production </li>
                            <li>Mystery Shopping </li>
                            <li>QA Assurance </li>
                            <li>Market research</li>
                        </ul>
                        <br />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-lxs-12 glyph-large"> 
                        <img src={s1} className="img-fluid" alt="Ayapa Services Limited" style={{ marginTop:24}} />
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Services;

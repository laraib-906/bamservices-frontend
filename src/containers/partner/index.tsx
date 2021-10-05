import React from 'react'
import Banner from '../../components/banner';
import bannerImage from "../../assert/partner_banner.jpg";
import p1 from "../../assert/partner/p1.png";
import p2 from "../../assert/partner/p2.png";

const Partners = () => {
    return (
        <div>
            <Banner bannerType="banner" bannerImage={bannerImage} />
            <div className="page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="heading caps">
                                NETWORK PARTNERS
                            </h3>
                            <br />
                            <p>
                                With over 12 years experience delivering our unique 'Fully managed SIM distribution model', we have a true partnership with all the major mobile networks. <br />
                                <br /> As one of the UK's fastest growing SIM distribution partners, and with several directors previously holding senior management positions within the mobile operators, our relationships mean we have access to the networks at the highest levels.

                                <br /><br />So what does it mean to our reseller partners?

                                <br /> <br />Because we work so closely with the Mobile Networks, we are ideally placed to understand their objectives and how they can be delivered through the retail channel.


                            </p>
                            <img src={p1} alt="partner" className="img-fluid" />
                        </div>
                        <hr />
                        <div className="col-md-12">
                            <h3 className="heading caps">
                                RETAIL PARTNERS
                            </h3>
                            <br />
                            <p>
                                Being part of the Ayapa, means we have the financial backing , distribution network and expertise to ensure we can offer the most competitive retail propositions. <br /><br />
                                What makes us unique is our approach to delivering new revenue streams to retail partners, driven by three key strategic delivery pillars:
                            </p>
                            <p>
                                <i className="fa fa-arrow-right me-2 "></i>
                                Firstly our fully managed SIM distribution model puts you in full control
                            </p>
                            <p>
                                <i className="fa fa-arrow-right me-2"></i>
                                Secondly our strong network partner relationships make sure we are leading the market with the most competitive retail propositions
                            </p>
                            <p>
                                <i className="fa fa-arrow-right me-2"></i>
                                And most importantly the philosophy that our financial success is intrinsically tied to that of our partners, driving our commitment to your business
                            </p>
                            <img src={p2} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners;

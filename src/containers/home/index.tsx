import React from 'react'
import "./home.css";
import Banner from '../../components/banner';
import BannerImage1 from "../../assert/banner1.jpg";
import BannerImage2 from "../../assert/banner2.jpg";
import BannerImage3 from "../../assert/banner3.jpg";
import BannerImage4 from "../../assert/banner4.jpg";
import corpCity from '../../assert/home/corp_cit.jpg';
import simServies from'../../assert/home/leading-mobile-sim-distributor-ayapa-services-images-networks-partners-home.png'
import ascc1 from'../../assert/home/ascc1.png'
import ascc2 from'../../assert/home/ascc2.png'
import ascc3 from'../../assert/home/ascc3.png'

const Home = () => {

    const imagesContainer: Array<{ url: string }> = [
        {
            url: BannerImage1
        },
        {
            url: BannerImage2
        },
        {
            url: BannerImage3
        },
        {
            url: BannerImage4
        },
    ]


    return (
        <div >
            <Banner bannerType="slider" sliderImages={imagesContainer} />
            <div className="page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                            <div>
                                <h3 className="caps">UK's leading mobile SIM distributor</h3>
                                <p>
                                    Ayapa is one of the leading mobile product and service distribution firm in the UK since 2010. We are working with all the leading mobile network providers to distribute their products across our platform.
                                </p>
                                <p>
                                    We play crucial role in the strategic growth of our partners. Providing first-class end-to-end mobile supply chain solutions for those on the high street wanting to leverage the most in-demand for mobile accessories.
                                </p>
                                <p>
                                    We manage multiple sales channels and network marketing promotions that delivers fantastic margins for UK retailers.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                            <div className="home-right-container">
                                <img src={corpCity} alt="corporation city" className="img-fluid home-right-img"/>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-5"/>
                    <div className="row">
                        <div className="col-md-12">
                            <img src={simServies} alt="sim services" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <img src={ascc1} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-4">
                            <img src={ascc2} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <img src={ascc3} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

import React from 'react'
import Banner from '../../components/banner';
import BannerImage1 from "../../assert/banner1.jpg";
import BannerImage2 from "../../assert/banner2.jpg";
import BannerImage3 from "../../assert/banner3.jpg";
import BannerImage4 from "../../assert/banner4.jpg";

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
        <div>
            <Banner bannerType="slider" sliderImages={imagesContainer} />
        </div>
    )
}

export default Home;

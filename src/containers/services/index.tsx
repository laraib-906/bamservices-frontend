import Banner from '../../components/banner';
import React from 'react';
import bannerImage from "../../assert/service_banner.jpg";

const Services = () => {
    return (
        <div>
            <Banner bannerType="banner" bannerImage={bannerImage} />
        </div>
    )
}

export default Services;

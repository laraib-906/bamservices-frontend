import React from 'react'
import Banner from '../../components/banner';
import bannerImage from "../../assert/partner_banner.jpg";

const Partners = () => {
    return (
        <div>
            <Banner bannerType="banner" bannerImage={bannerImage} />
        </div>
    )
}

export default Partners;

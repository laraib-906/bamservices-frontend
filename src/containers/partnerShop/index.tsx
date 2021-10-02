import Banner from '../../components/banner';
import React from 'react';
import bannerImage from "../../assert/partner_shop_banner.jpg";

const PartnersShop = () => {
    return (
        <div>
            <Banner bannerType="banner" bannerImage={bannerImage} />
        </div>
    )
}

export default PartnersShop;

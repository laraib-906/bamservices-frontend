import Banner from '../../components/banner';
import React from 'react';
import bannerImage from "../../assert/contact_banner.jpg";

const Contact = () => {
    return (
        <div>
            <Banner bannerType="banner" bannerImage={bannerImage} />
        </div>
    )
}

export default Contact;

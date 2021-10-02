import Banner from '../../components/banner';
import React from 'react';
import bannerImage from "../../assert/news_event_banner.jpg";

const NewsEvents = () => {
    return (
        <div>
            <Banner bannerType="banner" bannerImage={bannerImage} />
        </div>
    )
}

export default NewsEvents;

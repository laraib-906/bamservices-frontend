import Banner from "../../components/banner";
import React, { useEffect, useState } from "react";
import bannerImage from "../../assert/news_event_banner.jpg";
import { eventsMockData } from "../../../src/mock/events.mock";
import useRouter from "../../hooks/useRouter";

interface IEvents {
  img: string;
  title: string;
  details: string;
}

const NewsEvents = () => {

  const router = useRouter();
  const [eventsData, setEventsData] = useState<IEvents[]>([]);

  useEffect(() => {
    setEventsData(eventsMockData);
  }, []);

  function handleEventDetailsRoute(event: any) {
    router.push(`/news_events/${event.id}`)
  }

  return (
    <div>
      <Banner bannerType="banner" bannerImage={bannerImage} />
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="caps">Our Sponsorships &amp; Activities</h3>
              <br />
            </div>
            {eventsData &&
              eventsData.map((event, idx) => (
                <div
                  key={idx}
                  className="col-md-12"
                  style={{
                    borderBottom: "1px solid #ccc",
                    padding: "6px 15px",
                    marginBottom: "15px",
                  }}
                >
                  <img
                    src={event.img}
                    className="img-responsive img-text-wrap"
                    alt="Ayapa Services Limited"
                    title="Ayapa Services Limited"
                  />
                  <span className="news-title">
                    <a
                      className="more event-logger"
                      onClick={() => handleEventDetailsRoute(event)}
                    >
                      {event.title}
                    </a>
                  </span>
                  <br />
                  {event.details}
                  <br />
                  <a
                    className="more cursor"
                    onClick={() => handleEventDetailsRoute(event)}
                  >
                    ...More
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;

import useRouter from "../../../hooks/useRouter";
import React, { useEffect, useState } from "react";
import { eventsMockData } from "../../../../src/mock/events.mock";

interface IEventDetails {
  title: string;
  bulletList: Array<{ item: string }>;
  gallery: Array<{ img: string }>;
}

const EventDetails = () => {
  const router = useRouter();
  const query = router.query;
  const [stateData, setStateData] = useState<IEventDetails>(
    {} as IEventDetails
  );

  useEffect(() => {
    const data = eventsMockData.find((d) => d.id === parseInt(query.id, 10));
    setStateData(data?.more as IEventDetails);
    console.log(data?.more);
  }, []);

  function navigateback() {
    router.push("/news_events");
  }

  return (
    <div className="page">
      {stateData && (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb">
                <a className="cursor" onClick={navigateback}>
                  News & Events
                </a>
                <span className="me-2 ms-2">{">"}</span>
                <a href="#" className="cursor">
                  {stateData.title}
                </a>
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <h2>{stateData.title}</h2>
              <br />
              <ul>
                {stateData.bulletList?.map((list, idx) => (
                  <li key={idx}>{list.item}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-12 mt-4 caps">
              <h2>Gallery</h2>
            </div>
          </div>
          <div className="row">
            {stateData.gallery?.map((image, idx) => (
              <div className="col-xs-12 col-md-6" key={idx}>
                <span className="thumbnail">
                  <img src={image.img} alt="gallery Image" className="img-fluid" />
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;

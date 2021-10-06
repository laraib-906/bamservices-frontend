import Banner from "../../components/banner";
import React from "react";
import bannerImage from "../../assert/partner_shop_banner.jpg";

const PartnersShop = () => {
  return (
    <div>
      <Banner bannerType="banner" bannerImage={bannerImage} />
      <div className="page">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <h3 className="caps">Careers</h3>
              <p></p>
              <h4>
                Want to work with a leading mobile SIM distributor?
                <br />
                We’re hiring!
              </h4>

              <p></p>
              <p>
                Ayapa is a great place for the people who want to achieve great
                things. We have broad range of job opportunity nationwide from
                Manager level to Telesales staff
              </p>
              <p>
                Please send us your CV to{" "}
                <span className="medium-links">
                  admin@ayapa.co.uk, jobs@ayapa.co.uk
                </span>{" "}
                if you want to become a part of our Ayapa family!
              </p>
              <br />
              <h3>Current vacancies</h3>
            </div>

            <h1>
              <span className="news-title">
                <a href="#">
                  Business Development Managers (BDM){" "}
                </a>
              </span>
            </h1>
            <div>
              <h3>
                More than 15 Positions in all over UK - All Major Cities
                includes
                <b>
                  {" "}
                  Scotland (based in Edinburgh or Glasgow), Newcastle upon Tyne,
                  Middlesbrough, Hull, Bradford, Leeds,
                  <br />
                  Manchester, Sheffield, Doncaster, Bristol, Cardiff, Swansea,
                  Plymouth, Exeter, Portsmouth, Brighton, Norwich, Chelmsford
                  and Belfast.
                </b>
              </h3>
              <br />
              <span className="sub-title">Type:</span> Full/Part time -
              Permanent
              <br />
              <span className="sub-title">Salary:</span> up to £21K/annum +
              commission + mileage on business miles <br />
              <span className="sub-title">Location:</span> Nationwide
              <br />
              <br />
              <a
                className="btn-curved me-2"
                href="mailto:laraibamna906@gmail.com?Subject=Applying for job"
                target="_top"
              >
                Send CV to admin@bamservice.co.uk
              </a>
                <a
                  className="btn-curved"
                  href="mailto:laraibamna906@gmail.com?Subject=Applying for job"
                  target="_top"
                >
                  Send CV to jobs@bamservice.co.uk
                </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersShop;

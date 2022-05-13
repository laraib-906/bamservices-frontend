import Banner from "../../components/banner";
import React from "react";
import bannerImage from "../../assert/contact_banner.jpg";

const Contact = () => {
  
  return (
    <div>
      <Banner bannerType="banner" bannerImage={bannerImage} />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12 contact-section mb-4">
            <h3>
              If you are interested in becoming a reseller and want to grow
              your business, please complete the quick contact form and one of
              our marketing managers will be in touch with you.
            </h3>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            {/* <p className="tb-margin-spacer">If you are interested in becoming a reseller and want to grow your business, please complete the Quick Contact form and one of our Marketing Managers will be in touch with you.</p>  */}
            <h2>Our HQ</h2>AYAPA Services Ltd
            <br />
            Unit 1,10 Stonefield way
            <br />
            Ruislip
            <br />
            HA4 0JS
            <br />
            <br />
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-3">
                Phone
                <br />
                Email
                <br />
                Web
              </div>
              <div className="col-lg-9 col-md-8 col-sm-6 col-xs-9">
                : (0) 207 243 1119
                <br />
                : sales@ayapa.co.uk
                <br />: www.ayapa.co.uk
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-6 col-xs-12">
            <h3>Quick contact</h3>
            <form id="contact-form" method="post" action="">
              <div className="col-lg-9 mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  First Name*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="col-lg-9 mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  Last Name*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="col-lg-9 mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  Business Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="example corporation"
                />
              </div>

              <div className="col-lg-9 mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  Telephone*
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+49 211 example"
                />
              </div>

              <div className="col-lg-9 mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="col-lg-9 mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold"
                >
                  Message *
                </label>
                <textarea
                  className="form-control"
                  placeholder="Message for me *"
                  style={{ height: "100px" }}
                ></textarea>
              </div>
              <div className="col-lg-9">
                {/* <div className="group">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LeiyeUZAAAAAGwrdwZ_bLGj8I8s3yEkLGd2j0rC"
                    data-callback="verifyRecaptchaCallback"
                    data-expired-callback="expiredRecaptchaCallback"
                  >
                    <div style={{ width: "304px", height: "78px" }}>
                      <div>
                        <iframe
                          title="reCAPTCHA"
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeiyeUZAAAAAGwrdwZ_bLGj8I8s3yEkLGd2j0rC&amp;co=aHR0cHM6Ly93d3cuYXlhcGEuY28udWs6NDQz&amp;hl=en&amp;v=-TriQeni1Ls-Mdq_ssN2cUL5&amp;size=normal&amp;cb=ji1gfkq6n26z"
                          width="304"
                          height="78"
                          role="presentation"
                          name="a-6ice2vh54cx1"
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                        ></iframe>
                      </div>
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        style={{
                          width: "250px",
                          height: "40px",
                          border: "1px solid rgb(193, 193, 193)",
                          margin: "10px 25px",
                          padding: "0px",
                          resize: "none",
                          display: "none",
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <input
                    className="form-control d-none hide"
                    data-recaptcha="true"
                    required
                    data-error="Please complete the Captcha"
                  />
                  <div className="help-block with-errors"></div>
                </div> */}
                <div className="col-md-12" style={{ marginBottom: 10 }}>
                  {" "}
                  <br />* - Mandatory fields{" "}
                </div>

                <input
                  type="submit"
                  className="btn btn-success btn-send"
                  value="Send message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <section>
        <div className="sec-sim-form">
          <div className="sec-title theme-bg-2">
            <div className="container">We are here!</div>
          </div>
          <div>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9922.64372025913!2d-0.3741722262461099!3d51.55611621150914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b337e1f0f7056c8!2sAyapa%20Services%20Ltd!5e0!3m2!1sen!2slk!4v1597810789127!5m2!1sen!2slk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

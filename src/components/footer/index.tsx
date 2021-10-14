import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="theme-bg-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            © 2010-2021 Ayapa Services Limited.
            <br />
            All rights reserved.
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
            style={{ textAlign: "right" }}
          >
            sales@ayapa.co.uk
            <br />
            <i className="fa fa-phone"></i>&nbsp;(0) 207
            243 1119
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

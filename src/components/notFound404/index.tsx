import React from "react";
import { Link } from "react-router-dom";
import "./notFound404.css";

const NotFound404 = () => {
  return (
    <div className="not-found">
      <div>
        <h1>404 Page Not Found!</h1>
      </div>
      <div>
        <Link to="/">
          <button type="button" className="btn btn-info">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;

import useRouter from "../../hooks/useRouter";
import React from "react";
import { IRouters } from "../../types/routes";
import "./navbar.css";

interface Props {
  routes: IRouters[];
}

const Navbar = ({ routes }: Props) => {
  const router = useRouter();

  const handleRouter = (routeItem: IRouters) => {
    router.push(routeItem.route as string);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {routes.map((route, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className="nav-link"
                    aria-current="page"
                    onClick={() => handleRouter(route)}
                  >
                    {route.name}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  target="_blank"
                >
                  <i className="fa fa-user"></i>
                  <span>my ayapa</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

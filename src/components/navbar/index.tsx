import useRouter from "../../hooks/useRouter";
import { IRouters } from "../../types/routes";
import "./navbar.css";
import DownloadDialog  from '../navBarDialog/index'
interface Props {
  routes: IRouters[];
}

const Navbar = ({ routes }: Props) => {
  const router = useRouter();
  const navRoutes = routes.filter((item) => !item.hidden);

  const handleRouter = (ev: any, routeItem: IRouters) => {
    ev.preventDefault();
    router.push(routeItem.route as string);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="container p-0">
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
            <ul className="navbar-nav ">
              {navRoutes.map((route, index) => (
                <li className="nav-item" key={index}>
                  <a
                    href="/#"
                    className="nav-link p-1"
                    aria-current="page"
                    onClick={(ev) => handleRouter(ev, route)}
                  >
                    {route.name}
                  </a>
                </li>
              ))}
              <DownloadDialog/>
              <li className="nav-item">
                <a
                  href="/#"
                  className="nav-link p-1"
                  aria-current="page"
                  target="_blank"
                  onClick={(ev) => { ev.preventDefault(); }}
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

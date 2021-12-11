import useRouter from "../../hooks/useRouter";
import { IRouters } from "../../types/routes";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { session } from "../../services/session.service";
import { logoutUserAction } from "../../redux/actions/user";
interface Props {
  routes: IRouters[];
}

const Navbar = ({ routes }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const navRoutes = routes.filter((item) => !item.hidden);
  const user = useSelector((state: any) => state.users.user);

  const handleRouter = (ev: any, routeItem: IRouters) => {
    ev.preventDefault();
    router.push(routeItem.route as string);
  };

  const logout = (ev: any) => {
    ev.preventDefault();
    session.removeTokenCookie();
    dispatch(logoutUserAction({}));
  }

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
              {!user.firstName && !user.lastName ? (
                <li className="nav-item">
                  <a
                    href="/#"
                    className="nav-link p-1"
                    aria-current="page"
                    target="_blank"
                    onClick={(ev) => {
                      ev.preventDefault();
                      router.push("/login");
                    }}
                  >
                    <i className="fa fa-user"></i>
                    <span>MY AYAPA</span>
                  </a>
                </li>
              ) : (
                <div className="dropdown">
                  <button
                    className="btn nav-link dropdown-toggle"
                    style={{ padding: '3px' }}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {`${user.firstName} ${user.lastName}`}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item disable" href="/#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={(ev) => logout(ev)} href="/#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

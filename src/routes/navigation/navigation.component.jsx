import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as RfLogo } from "../../assets/rf.svg";
import { UserProvider } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserProvider);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <RfLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

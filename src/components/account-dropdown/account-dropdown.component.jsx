import { useContext } from "react";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as UserIcon } from '../../assets/user-icon.svg';
import { ReactComponent as InfoIcon } from '../../assets/retinfo.svg';
import { ReactComponent as ReturnsIcon } from '../../assets/returns.svg';
import { ReactComponent as OrdersIcon } from '../../assets/orders.svg';

import { AccountDropdownContainer } from "./account-dropdown.styles";

const AccountDropdown = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<AccountDropdownContainer >
      <div className="slideDownheader">
        <div className="container">
          <span className="links">
            <a className="link">Join</a>
            <div className="pipe" aria-hidden="true"></div>
            {currentUser ? (
              <a className="link" onClick={signOutUser}>
                SIGN OUT
              </a>
            ) : (
              <a className="link" href="/auth">
                SIGN IN
              </a>
            )}
          </span>
        </div>

        <button
          className="widget-btn iconBtn"
          aria-label="Close"
          aria-expanded="false"
          type="button"
        >
          <span className="close medium container widgetIcon blackIcon "><a className="link" href="">x</a></span>
        </button>

      </div>

      <div className="dropdown-content">
        <l1>
          <a className="link">
            <UserIcon/>My Account
          </a>
        </l1>
        <l1>
          <a className="link">
            <OrdersIcon/>My Orders
          </a>
        </l1>
        <l1>
          <a className="link">
            <ReturnsIcon/>My Returns
          </a>
        </l1>
        <l1>
          <a className="link">
            <InfoIcon/>Returns Information
          </a>
        </l1>
       
      </div>
    
		</AccountDropdownContainer>
	);
};

export default AccountDropdown;

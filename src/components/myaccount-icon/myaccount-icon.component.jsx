import { useContext } from 'react';

import { ReactComponent as UserIcon } from '../../assets/user-icon.svg';

import { UserContext } from '../../contexts/user.context';

import { AccountIconContainer } from './myaccount-icon.styles';

const AccountIcon = () => {
  const { isDropdownOpen, setIsDropdownOpen, } = useContext(UserContext);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <AccountIconContainer onClick={toggleDropdown}>
      <button 
        className="widget-btn iconBtn" 
        data-testid="myAccountIcon"
        type="button" 
        aria-expanded="false" 
        aria-controls="myaccount-dropdown" 
        aria-label="My Account"
      >
        <UserIcon className="widgetMyAccount" />
      </button>
    </AccountIconContainer>
  );
};

export default AccountIcon;
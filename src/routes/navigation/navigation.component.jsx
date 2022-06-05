import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as RfLogo } from '../../assets/rf.svg'

import './navigation.styles.scss'

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link className='logo-container' to='/'>
          <RfLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop' >
            SHOP
          </Link>
          <Link className='nav-link' to='/shop' >
            SIGN IN
          </Link>
          <Link className='nav-link' to='/shop' >
            SIGN UP
          </Link>
        </div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

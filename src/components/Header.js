import React   from 'react';
import {NavLink} from 'react-router-dom';

const Header= () => (
    <div>
        <h1>Welcome To Expensify</h1>
        <h3><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> &nbsp;
            <NavLink to="/create" activeClassName="is-active">Create</NavLink> &nbsp;
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </h3>
    </div>
);

export default Header;
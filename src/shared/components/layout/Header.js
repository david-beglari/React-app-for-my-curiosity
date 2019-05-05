import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

const Header = props => {
    const {
        title = 'Welcome to React',
        url = 'http://localhost:3000'
    } = props;

    return (
        <header className="">
            <a href={url}>
                <img src={logo} className="App-logo" alt="logo" />
            </a>
            <h5 className="App-title">{title}</h5>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default Header;
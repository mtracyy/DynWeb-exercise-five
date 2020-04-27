import React from 'react';

function Header({LogoutFunction, isLoggedIn}) {
    return (
        <header className="Header">
            <nav className="Header_nav">
                {isLoggedIn && <a href="/">Profile</a>}
                {!isLoggedIn && <a href="/create-account">Sign Up</a>}
                {!isLoggedIn && <a href="/login">Login</a>}
                {isLoggedIn && <a onClick={() => LogoutFunction()}>Logout</a>}
            </nav>
        </header>
    );
}

export default Header;
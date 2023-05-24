import React from 'react';

function Header({children}) {
    return (
        <header className="flex justify-center">
            <img src="/img/logo.svg" alt="Logo" >
            </img>
        </header>
    )
}

export default Header;
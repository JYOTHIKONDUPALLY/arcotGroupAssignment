import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import "./header.css";
const Header: React.FC = () => {
    return (
        <header className="header">
            <div className='logo'><DiCssdeck size="4rem"/></div>
            <h1>Vuexy</h1>
        </header>  
    );
}

export default Header;

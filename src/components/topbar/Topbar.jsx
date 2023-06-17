import './topbar.css';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
function Topbar({ menuOpen, setMenuOpen }) {


    function handleMenuOpen() {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
        console.log(menuOpen);

    }
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#intro" className='logo'>Company.</a>
                    <div className='item-container'>
                        <PersonIcon className="icon" />
                        <span>+9290078601</span>
                    </div>
                    <div className='item-container'>
                        <EmailIcon className="icon" />
                        <span>test@gmail.com</span>
                    </div>

                </div>
                <div className='right'>
                    <div className='hamburger' onClick={handleMenuOpen}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
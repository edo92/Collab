import React from 'react'
import '../MainHeader/Header.css'

import HamburgerMenu from './Components/Hamburger'

const Header = () => {
    return (
        <nav id='main-header' className='col-12'>
            <ul className='row col-12 py-1 m-0'>
                <li className='col-3'>
                    <HamburgerMenu/>
                </li>

                <li className='col-6'>
                    <h3 className='main-logo'>Collab</h3>
                </li>

                <li className='col-3'>
                    <div id='loginBtn'>
                        <a href='/signup' className='secondery-bttn'>Sign Up</a>
                        <a href='/signin' className='main-bttn'>Login</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
};

export default Header;
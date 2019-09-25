import React from 'react'
import './style.css'

import RightBtns from './Components/RightBtns'
import LeftBtns from './Components/LeftBtns'

const AdvencedHeader = props => {
    return(
        <div id='client-header-container' className='col-12'>
            <nav id='client-header-inner' className='col-12 p-0'>
                <div className='row col-12 py-1 m-0'>
                    <div className='row col-5 pr-0'>
                        <LeftBtns/>
                    </div>
                    <div className='col-3 p-0'>
                        <h3 className='nav-logo'>Collab</h3>
                    </div>
                    <div className='col-4 p-0 ml-4'>
                        <RightBtns/>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default AdvencedHeader;
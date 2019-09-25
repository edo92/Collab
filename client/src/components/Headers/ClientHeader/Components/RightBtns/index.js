import React from 'react';
import { Icon } from 'antd';
import './style.css'

const RightBtns = props => {
    return(
        <div className='col-12 p-0'>
            <div className='nav-btn-color right-btn'>
                <Icon className='p-2' type='bell'/>
            </div>
            <div className='nav-btn-color right-btn'>
                <Icon className='p-2' type='plus'/>
            </div>
            <div className='nav-btn-color right-btn'>
                <Icon className='p-2' type='user'/>
            </div>
        </div>
    )
};

export default RightBtns;

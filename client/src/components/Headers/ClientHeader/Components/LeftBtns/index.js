import React from 'react';
import { Icon } from 'antd';
import './style.css'

export const user = window.location.pathname.split('/')[2];


function LeftBtns( props ){
    return(
        <div>
            <a href={`/dashboard/${ user }`} className='left-btn nav-btn-color'>
                <div className='row col-12 p-0 m-0'>
                <Icon className='pt-1' style={{fontSize:'16px'}} type='project'/>
                <span className='pl-2 min-btn-md color-white'>Projects</span>
            </div>
            </a>
        </div>          

    )
};

export default LeftBtns;

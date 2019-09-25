import React from 'react'
import { Divider } from 'antd';
import './style.css'

const DashboardFooter = () => {
    return (
        <div id='dash-footer-container' className='col-12 p-0'>
            <Divider className='m-0 w-100'/>
            <div className='col-12'>
                <ul className='col-12 p-0 m-0 display-flex' style={{lineHeight:'3', justifyContent:'space-between'}}>
                    <li> 
                        <span>Collab</span>
                    </li>
                    <li> 
                        <span>Collab</span>
                    </li>
                </ul>
            </div>
            <div id='dash-footer-line' className='col-12'></div>
        </div>
    )
};

export default DashboardFooter;
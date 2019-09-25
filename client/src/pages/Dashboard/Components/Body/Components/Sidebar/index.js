import React from 'react'
import { Icon } from 'antd'
import './style.css'

const Sidebar = props => {
    return (
        <div id='dash-action-menu' className='col-3 col-sm-4 col-md-3 col-lg-2'>
            <ul className='row col-12 p-0 m-0 listType-none'>
                <li className='col-12 font-style-dash'>
                    <div onClick={ props.projectSwitch }>
                        <Icon className='mr-1' type='plus'/>Create Project
                    </div>
                </li>
                <li className='col-12 font-style-dash'>
                    <div>
                        <Icon className='mr-1' type='usergroup-add'/>Create Group
                    </div>
                </li>
                <li className='col-12 font-style-dash'>
                    <div>
                        <Icon className='mr-1' type='project'/>All Projects
                    </div>
                </li>
                <li className='col-12 font-style-dash'>
                    <div>
                        <Icon className='mr-1' type='project'/>Recent Projects
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;
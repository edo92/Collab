import React, { Component } from 'react'
import { Icon } from 'antd'
import './style.css'


class Sidebar extends Component {
    state={
        cardModal: false
    }

    render(){
        const iconList = [
            { icon:'plus', action: this.props.cardModalSwitch },
            { icon:'message', action: this.props.textBoxSwitch },
            { icon:'usergroup-add', action: this.props.addCollabSwitch }
        ];

        return (
            <div id='dash-sidebar-container'>
                <div id='sidebar-header' className='col-12 p-0 py-4'>
                    <div className='col-12 text-center'>
                        <h6 className='nav-logo'> Collab </h6>
                    </div>
                </div>
                <div className='col-12 p-0'>
                    <ul id='dash-sidebar-inner' className='col-12'>
                        { iconList.map(( item, i ) => {
                            return (
                                <li key={item.icon+i}>
                                    <div onClick={()=> item.action()} className='py-2'>
                                        <Icon className='nav-icon' type={ item.icon }/>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='col-12 h-100'>
                    <div className='text-center pos-fixed b-0'>
                        <Icon className='nav-icon p-4' type='logout'/>
                    </div>
                </div> 
            </div>
        )
    }
};

export default Sidebar;
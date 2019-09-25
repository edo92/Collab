import React from 'react'
import { Icon, Menu, Popconfirm } from 'antd'
import './style.css'

const DropMenu = props => {
    return (
        <Menu id='task-drop-menu'>
            <Menu.Item>
                <Popconfirm
                    title='Are you sure delete this project?'
                    onConfirm={ props.cardDelete }
                    onCancel={()=> null}
                    okText='Yes'
                    cancelText='No'
                    placement='topRight'
                >
                    <span>
                        <Icon className='mr-2' type='delete'/>
                        <span>Delete</span>
                    </span>
                </Popconfirm>
            </Menu.Item>
            <Menu.Item>
                <span>
                    <Icon className='mr-2' type='delete'/>
                </span>
            </Menu.Item>
            <Menu.Item>
                <span>
                    <Icon className='mr-2' type='delete'/>
                </span>
            </Menu.Item>
        </Menu>
    )
};

export default DropMenu;
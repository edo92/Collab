import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Icon, Menu, Dropdown, Popconfirm } from 'antd'
import './style.css'

import { deleteProject } from '../../../../../../Store/Actions/project/delete'

const ProjectList = props => {
    const menu = id => (
        <Menu>
            <Menu.Item key='1' >
                <Popconfirm
                    title="Are you sure delete this project?"
                    onConfirm={()=> props.delete( id )}
                    onCancel={props.cancel}
                    okText="Yes"
                    cancelText="No"
                    placement="topRight"
                >
                    <span>
                        <Icon className='mr-2' type='delete'/>
                        <span>Delete</span>
                    </span>
                </Popconfirm>
            </Menu.Item>
    
            <Menu.Item key='2' >
            <Icon type='star'/>
                <span>Star</span>
            </Menu.Item>
            
            <Menu.Item>
                <Icon type='highlight'/>
                <span>Highlight</span>
            </Menu.Item>
      </Menu>
    );
    let projects = props.projects;

    const hrefTo = (id,e) => {
        if( e.target.className === 'project-box' ){
            props.history.push(`/project/${props.uid}/${id}`);
        }
    };

    return (
        <div className='col-9 col-sm-8 col-md-9 p-0'>
            <div id='dash-project-showcase' className='col-12'>
                <ul className='row col-12 p-0 m-0'>
                    { projects ? projects.map(( project, i ) =>{
                        return (
                            <li key={ project.id } className='col-12 col-md-6 col-lg-4 col-xl-4 p-3'>
                                <div className='project-box' onClick={(e)=> hrefTo(project.id, e)}>
                                    <div className='col-12 p-0'>
                                        <div className='col-12 box-icons'>
                                            <Dropdown overlay={()=>menu(project.id)}>
                                                <Icon type='ellipsis'/>
                                            </Dropdown>
                                        </div>
                                        <div className='col-12 box-title'>
                                            <p>{ project.name }</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    }) : null }
                </ul>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        uid: state.user.user 
    }
};
const mapDispatchToProps = dispatch => {
    return {
        delete: (id)=> dispatch( deleteProject(id))
    }
};
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( ProjectList ));
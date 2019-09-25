import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Icon, Modal, Input, Avatar, AutoComplete } from 'antd'
import './style.css'

import { create } from '../../../../../../Store/Actions/project/create'

class Modals extends Component {
    state={
        name:'',
        collabs:[],
        collabSearch:''
    }

    collabSearchInput = e => {
        this.setState({
            collabSearch: e.target.value
        })
    };

    addCollab = () => {
        this.setState({
            collabs: [...this.state.collabs, this.state.collabSearch]
        });
        this.setState({ collabSearch:'' })
    };

    handleFormInput = e => {
        this.setState({
            name: e.target.value
        });
    };

    handleCreateProject = () => {
        this.props.createProject( this.state.name );
    };

    render(){
        return (
            <div>
                <Modal
                    title='Add Project'
                    visible={ this.props.projectModal }
                    onOk={ this.handleCreateProject }
                    onCancel={ this.props.projectSwitch }
                >
                    <div id='project-modal-form'>
                        <div className='col-12 p-0'>
                            <div className='col-12 p-0'>
                                <Input 
                                    onChange={ this.handleFormInput } 
                                    placeholder='Project Name'
                                    name='name'
                                />
                            </div>
                        </div>
                        <div className='row col-12 m-0 px-0 py-3'>
                            <div className='col-5 p-0'>
                                <div className='col-12 p-0'>
                                    <a onClick={ this.addCollab } className='btn btn-primary text-white p-1 px-3'>
                                        <span> Add Colaborator </span>
                                        <Icon className='px-1' type='plus'/>
                                    </a>
                                </div>
                            </div>
                            <div className='col-7 p-0'>
                                <div className='col-12 p-0'>
                                    <AutoComplete
                                        dataSource={['user1','user2','user3']}
                                        className='w-100'
                                        autoFocus={ true }
                                    >
                                        <Input 
                                            onChange={ this.collabSearchInput } 
                                            value={ this.state.collabSearch }
                                            placeholder='Search Collab'
                                        />
                                    </AutoComplete>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 p-0'>
                            <div className='col-5 px-0 py-3'>
                                <div className='col-12 p-0'>
                                    { this.state.collabs.map(( collab, i ) => {
                                        return (
                                            <Avatar key={i} className='p-1 mr-1 mt-1'/>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        uid: state.user.user
    }
};
const mapDispatchToProps = dispatch => {
    return {
        createProject:(data)=> dispatch( create(data))
    }
};

export default connect( mapStateToProps, mapDispatchToProps )( Modals );

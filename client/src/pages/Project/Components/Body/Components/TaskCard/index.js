import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Dropdown, Input } from 'antd'
import './style.css'

import { deleteCard } from '../../../../../../Store/Actions/card/delete'
import { createTask } from '../../../../../../Store/Actions/task/create'
import { deleteTask } from '../../../../../../Store/Actions/task/delete'
import DropMenu from './Components/Menu'

class CardList extends Component {
    state={
        addCard: false,
        taskText: ''
    }

    textAreaSwitch = () => {
        this.setState({
            addCard: !this.state.addCard
        });
    };

    handleInputTask = e => {
        this.setState({
            taskText: e.target.value
        });
    };
    
    handleCreateTask = ( name, text ) => {
        this.props.taskCreate({ name, text });
        this.setState({ taskText: '' });
    }
   
    render(){
        const { TextArea } = Input;
        let { name, tasks } = this.props.card;

        const menu = () => (
            <DropMenu cardDelete={()=> this.props.cardDelete( name )}/>
        );

        return (
            <div id='task-card-container'>
                <div id='task-card-inner' className='m-2 p-0 px-2'>
                    <div className='row col-12 m-0 p-0 pt-3'>
                        <span className='col-9 pr-0'>{ name }</span>
                        <Dropdown overlay={ menu } placement='topCenter'>
                            <Icon className='col-3 mt-1' type='ellipsis'/>
                        </Dropdown>
                    </div>
                    <div className='col-12 p-0'>
                        <ul id='task-list' className='col-12 px-1'>
                            { tasks ? tasks.map(( task, i ) => {
                                return (
                                    <li  key={ task+i } draggable='true' className='row task'>
                                        <a className='col-10 word-break'>{ task }</a>
                                        <a onClick={()=> this.props.taskDelete({ name, task })} className='col-2'>
                                            <Icon className='icon-style' type='delete'/>
                                        </a>
                                    </li> 
                                )
                            }) : null } 
                        </ul>
                        <hr className='m-0 w-100'/>
                    </div>
                    <div id='addTasksBttn-container' className='col-12 pb-3 p-2'>
                        { this.state.addCard ? 
                            <div className='col-12 p-0'>
                                <Input 
                                    onPressEnter={()=> this.handleCreateTask( name, this.state.taskText )}
                                    onChange={ this.handleInputTask } 
                                    value={ this.state.taskText }
                                    className='col-12 mb-2 p-0 add-textarea' 
                                />
                                <div className='col-12 p-0'>
                                    <button 
                                        onClick={()=> this.handleCreateTask( name, this.state.taskText )}
                                        className='col-6 btn btn-success'>Add
                                    </button>
                                    <button 
                                        onClick={ this.textAreaSwitch }
                                        className='col-6 btn btn-light'>cancel
                                    </button>
                                </div>
                            </div>
                            :
                            <div className='col-12'>
                                <a onClick={ this.textAreaSwitch }>
                                    <span className='pr-2'>Add Card</span>
                                    <Icon type='plus'/>
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        cardDelete: (id)=> dispatch( deleteCard(id)),
        taskCreate: (n,t)=> dispatch( createTask(n,t)),
        taskDelete: (id)=> dispatch( deleteTask(id))
    }
};

export default connect( null, mapDispatchToProps )( CardList );
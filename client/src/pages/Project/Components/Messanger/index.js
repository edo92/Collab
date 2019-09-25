import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Icon, Input } from 'antd'
import './style.css'

import MessageReciver from './Components/Reciver'
import MessageSender from './Components/Sender'

import { sendMessage } from '../../../../Store/Actions/message/send'

let { TextArea } = Input;

class Messanger extends Component {

    handleInputMessage = e => {
        this.setState({
            message: e.target.value
        })
    }

    emptyText = () => {
        this.setState({
            message: ''
        })
    }

    handleSubmitMessage = () => {
        this.props.messageSend( this.state.message );
        this.emptyText();
    }

    render(){
        const props = this.props;
        let move = {
            width: this.props.textBox ? '300px' : '0',
            visible: this.props.textBox ? 'visible' : 'hidden'
        }
        return (
            <div id='messanger-container' style={{ width: move.width }}>
                <div id='messanger-inner' className='col-12 p-0'>
                    <div className='col-12 p-0'>
                        <div id='message-section' className='col-12'>
                            <div className='col-12 scrolable-y'>
                                <ul className='col-12 p-0'>
                                    { props.messages ? props.messages.map( message => {
                                        return (
                                            <MessageReciver message={ message }/>
                                        )
                                    }): null }
                                </ul>
                            </div>
                        </div>
                        <div id='chat-textarea-container' className='col-12 p-0' style={{ visibility : move.visible }}>
                            <div id='chat-textarea-inner' className='col-12 p-0'>
                                <div id='textBox' className='col-12 p-3'>
                                    <TextArea onChange={ this.handleInputMessage } className='col-12'/>
                                </div>    
                                <div onClick={ this.handleSubmitMessage } id='sendMessage-container' className='col-12 text-right'>
                                    <a className='btn-primary chat-button'><Icon type='up-circle'/> Send</a>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        messages: state.app.messages
    }
};
const mapDispatchToState = dispatch => {
    return {
        messageSend: (mess)=> dispatch( sendMessage(mess))
    }
};
export default connect( mapStateToProps, mapDispatchToState )( Messanger );
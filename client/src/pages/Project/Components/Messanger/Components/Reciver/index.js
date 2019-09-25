import React from 'react'
import './style.css'

const MessageReciver = props => {
    let message = props.message;
    return (
        <li  className='col-12 p-0'>
            { message ? Object.keys( message ).map( sender => {
                return (
                    <div className='col-12 p-0'>
                        <div className='col-12 mb-2 pr-3 text-right'>
                            <small>{ sender }</small>
                        </div>
                        <div className='col-10 recive-message float-right p-15px'>
                            <p className='font-14px'>{ message[sender] }</p>
                        </div>
                    </div>
                )
            }) : null }
            
        </li> 
    )
};

export default MessageReciver;
import React from 'react'
import { Input, Form, Icon } from 'antd'
import './style.css'

const RegisterForm = props => {
    return (
        <div id='register-form'>
            <Form.Item
                hasFeedback
                validateStatus={ props.status.emailStatus }
                className='m-0'
            >
                <Input 
                    onChange={ props.handleInput } 
                    name='email' prefix={ <Icon type='mail'/> } 
                    placeholder='Email'
                />
            </Form.Item>  
            <Form.Item
                hasFeedback
                validateStatus={ props.status.displayNameStatus }
                className='m-0'
            >
                <Input 
                    onChange={ props.handleInput } 
                    name='displayName' prefix={ <Icon type='mail'/> } 
                    placeholder='Name'
                />
            </Form.Item>
            <Form.Item
                hasFeedback
                validateStatus={ props.status.passwordStatus }
                className='m-0'
            >
                <Input.Password
                    onChange={ props.handleInput } 
                    prefix={ <Icon type='lock'/> } 
                    name='password' 
                    placeholder='Password'
                />
            </Form.Item> 
            <Form.Item
                hasFeedback
                validateStatus={ props.status.repPasswordStatus }
            >
                <Input.Password
                    onChange={ props.handleInput } 
                    prefix={ <Icon type='lock'/> } 
                    name='repPassword' 
                    placeholder='Repeate Password'
                />
            </Form.Item> 
        </div>
    )
};

export default RegisterForm;
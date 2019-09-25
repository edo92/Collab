import React, { Component } from 'react'

import AuthLayout from '../Components/AuthLayout'
import RegisterForm from './Components/RegisterForm'

import { validate } from '../../../utility/validations'
import { request } from '../../../requrests'

let statusCode = {
    exists: 'auth/email-already-exists'
};

class Register extends Component {
    state={
        status: {},
        message:[],
        form: {
            email:'',
            displayName:'',
            password:'',
            repPassword:''
        }
    }
    
    handleInput = e => {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };
    
    handleSumbit = () => {
        const onSubmit = async res => {
            this.setState({
                status: res.status,
                message: res.messages
            });

            const handleError = resp => {
                if( resp.code ===  statusCode.exists){
                    this.setState({
                        message: { emailError: resp.message },
                        status: {
                            ...this.state.status, 
                            ...{ emailStatus:'error' }
                        },
                    });
                }
            };

            if( res.validForm ){
                let created = await request.user.register( this.state.form );
                let data = created.data;
                if( data.error ){
                    handleError( data.error );
                } 
                else if ( data.success ){
                    this.props.history.push('/signin')
                }
            };
        };
        validate({
            onAction: (res) => onSubmit(res),
            form: this.state.form,
            options: { withPrefix: true }
        });
    };

    render(){
        return (
            <div id='register-container' className='row col-12 p-0 m-0'>
                <AuthLayout
                    path={'register'}
                    handleSumbit={ this.handleSumbit }
                    message={ this.state.message }
                    form={ 
                        <RegisterForm 
                            handleInput={ this.handleInput }
                            status={ this.state.status }
                        /> 
                    }
                >
                </AuthLayout>
            </div>
        )
    }
};

export default Register;
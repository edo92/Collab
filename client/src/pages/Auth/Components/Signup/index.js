import React, { Component } from 'react'
import AuthLayout from '../Components/AuthLayout'
import RegisterForm from './Components/RegisterForm'
import { validate } from '../../../utility/validations'

class Register extends Component {
    state={
        status: {},
        message:{},
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
        const onSubmit = res => {
            this.setState({
                status: res.status,
                message: res.messages
            });
            if( res.validForm ){
                // make a requrest
            }
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
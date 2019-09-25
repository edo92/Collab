import React, { Component } from 'react'

import { validate } from '../../../utility/validations'

import SignInForm from './Components/SignInForm'
import AuthLayout from '../Components/AuthLayout'

import firebase from 'firebase/app';
import app from '../../../utility/configs/firebaseConfig'

class Login extends Component {
    state={
        status: {},
        message: {},
        form: {
            email:'',
            password:''
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
        let form = this.state.form;
        const onSubmit = async (res) => {
            this.setState({
                status: res.status,
                message: res.messages
            });

            const handleError = error => {
                this.setState({
                    message: { error: error.message },
                    status: {
                        emailStatus: 'error',
                        passwordStatus: 'error'
                    },
                });
            };

            if( res.validForm ){
                try {
                    await app.auth().setPersistence(
                        firebase.auth.Auth.Persistence.SESSION
                    );
                    await app.auth().signInWithEmailAndPassword(
                        form.email, form.password
                    );
                    let user = app.auth().currentUser.uid;
                    this.props.history.push(`/dashboard/${user}`)
                }
                catch ( error ){
                    handleError( error );
                };
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
            <div className='row col-12 m-0 p-0'>
                <AuthLayout
                    path={'login'}
                    handleSumbit={ this.handleSumbit }
                    message={ this.state.message }
                    form={ 
                        <SignInForm 
                            keyPressEnter={ this.handleSumbit }
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

export default Login;
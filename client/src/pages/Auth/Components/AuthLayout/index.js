import React from 'react'
import { Icon, Button, Divider } from 'antd'
import './style.css'

const AuthLayout = props => {
    let path = props.path === 'login';
    let page = {
        path: props.path,
        switch: path ? 'signup' : 'login',
        sideMessage: path ? 'Not registered yet ?' : 'Already Registered ?',
        divMessage: path ? 'Forgat Password' : 'Sign In With'
    };
    
    return (
        <div id='auth-layout-container' className='row col-12'>
            <div id='auth-layout-sidebar' className='col-4 hidden-sm'> 
                <div className='row col-12 p-3 m-0'>
                    <h4 className='logo-white'>Collab</h4>
                </div>
                <ul className='col-12'>
                    <li className='p-2'>
                        <h4 className='text-white'>Hey!</h4>
                        <h6 className='text-white'>{ page.sideMessage }</h6>
                    </li>
                    <li className='p-2 pt-3'>
                        <a href={`/${ page.switch }`} className='col-12' id='switch-form'>{ page.switch }</a>
                    </li>
                </ul>
            </div>

            <div id='auth-layout-body' className='col-12 col-md-8'>
                <div className='col-12 p-0 pt-4'>
                    <h2 id='form-title'>{ page.path }</h2> 
                </div>
                <ul className='col-12 p-0'>
                    <li>
                        <div className='col-12 p-0'>
                            { props.form }
                            <Button onClick={ props.handleSumbit } className='bttn-x auth-form-submit'>{ page.path }</Button>
                        </div>
                    </li>
                    <li>
                        <div className='col-12 p-0'>
                            <Divider className='w-100'>
                                <a href={`/${ page.switch }`}><small id='forgot-pass'>{ page.divMessage }</small></a>
                            </Divider>
                        </div>
                        <div className='col-12 p-0'>
                            <Button className='bttn-x alt-facebook'>
                                <Icon className='alt-icon' type='facebook'/>  Facebook
                            </Button>
                            <Button className='bttn-x alt-google'>
                                <Icon className='alt-icon'type='google-plus'/> Google 
                            </Button>
                        </div>
                    </li>
                </ul>
                <div className='col-12'>
                    <ul className='col-12 p-0 m-0'>
                        { Object.keys( props.message ).map(( item,i ) => {
                            let mesge = props.message[item];
                            return (
                                <li key={ mesge+i } className='color-fail p-0'>
                                    <small>{ mesge }</small>
                                </li>
                            )
                        })}
                    </ul>
                </div>  
            </div>
        </div>
    )
};

export default AuthLayout;
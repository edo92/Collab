import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.css'

import ProjectList from './Components/ProjectList'
import Sidebar from './Components/Sidebar'
import Modals from './Components/Modals'

import { getAll } from '../../../../Store/Actions/project/getAll'
import { setAuthUser } from '../../../../Store/Actions/user/setUser'

class DashboardBody extends Component {
    state={
        switches:{
            projectModal: false
        }
    }

    componentDidMount(){
        this.setUserCredential();
        this.props.getAllProjects();
    }

    setUserCredential = () => {
        let uid = this.props.history.location.pathname.split('/')[2];
        this.props.setUser( uid );
    }

    projectModalSwitch = () => {
        this.setState({
            projectModal: !this.state.projectModal
        })
    }

    render(){
        return (
            <div className='col-12 p-0'>
                <div id='dash-body-container' className='col-12 p-0'>
                    <div id='dash-body-inner' className='row col-12 p-0 m-0'>
                        <Sidebar
                            projectSwitch={ this.projectModalSwitch }
                        />
    
                        <ProjectList projects={ this.props.userProjects }/>
                    </div>
                </div>
                <Modals
                    projectModal={ this.state.projectModal }
                    projectSwitch={ this.projectModalSwitch }
                />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        uid: state.user.user,
        userProjects: state.app.projects,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getAllProjects: ()=> dispatch( getAll()),
        setUser: (user)=> dispatch( setAuthUser(user)),
    }
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( DashboardBody ));
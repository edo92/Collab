import React, { Component } from 'react'
import { connect } from 'react-redux'

import Body from './Components/Body'
import Sidebar from './Components/Sidebar'
import Messanger from './Components/Messanger'
import AddCardModal from './Components/Modals/AddCardModal'
import AddCollabModal from './Components/Modals/AddCollabModal'

import { setAuthUser } from '../../Store/Actions/user/setUser'
import { create } from '../../Store/Actions/card/create'
import { getAll } from '../../Store/Actions/card/getAll'
import { getAllMessages } from '../../Store/Actions/message/getAll'
import { searchCollab } from '../../Store/Actions/collab/search'
import { addCollab } from '../../Store/Actions/collab/add'

class ProjectView extends Component {
    state={
        textBox: false,
        cardName: '',
        collabModal: false,
        collabSearch:''
    }

    componentDidMount(){
        this.setUserCredential();
        this.props.getAllCards();
        this.props.getMessages();
    };

    setUserCredential = () => {
        let uid = this.props.history.location.pathname.split('/')[2];
        let id = this.props.history.location.pathname.split('/')[3];
        this.props.setUser( uid, id );
    };

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    textBoxSwitch = () => {
        this.setState({
            textBox: !this.state.textBox
        });
    };

    cardModalSwitch = () => {
        this.setState({
            cardModal: !this.state.cardModal
        })
    };
    
    handleCreateCard = () => {
        this.props.createCard( this.state.cardName );
        this.cardModalSwitch();
        this.setState({ cardName: '' });
    };

    handleSearchCollab = value => {
        this.setState({
            collabSearch: value
        }, () => {
            this.props.searchCollab( this.state.collabSearch );
        });
    };

    handleAddCollab = list => {
        this.props.addCollabList( list );
    };

    addCollabSwitch = () => {
        this.setState({
            collabModal: !this.state.collabModal
        })
    };

    render(){
        return (
            <div className='col-12 p-0 overflow-hidden'>
                <div className='col-12 p-0'>
                    <div className='row col-12 scrollable overflow-y-hidden'>
                        <Sidebar 
                            textBoxSwitch={ this.textBoxSwitch }
                            cardModalSwitch={ this.cardModalSwitch }
                            addCollabSwitch={ this.addCollabSwitch }
                        />
                        <Messanger textBox={ this.state.textBox }/>

                        <Body cards={ this.props.cards }/>
                    </div>
                </div>
                <AddCardModal
                    cardModal={ this.state.cardModal }
                    createCard={ this.handleCreateCard }
                    cardModalSwitch={ this.cardModalSwitch }
                    handleInput={ this.handleInput }
                    cardName={ this.state.cardName }
                />
                <AddCollabModal
                    collabModal={ this.state.collabModal }
                    addCollab={ this.handleAddCollab }
                    addCollabSwitch={ this.addCollabSwitch }
                    searchCollab={ this.handleSearchCollab }
                    userList={ this.props.userList }
                />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        userList: state.app.userList,
        cards: state.app.cards
    }
};
const mapDispatchToProsp = dispatch => {
    return {
        getAllCards: ()=> dispatch( getAll()),
        createCard: (data)=> dispatch( create(data)),
        setUser: (uid,id)=> dispatch( setAuthUser(uid,id)),
        getMessages: ()=> dispatch( getAllMessages()),
        searchCollab: (name)=> dispatch( searchCollab(name)),
        addCollabList: (list)=> dispatch( addCollab(list))
    }
};
export default connect( mapStateToProps, mapDispatchToProsp )( ProjectView );
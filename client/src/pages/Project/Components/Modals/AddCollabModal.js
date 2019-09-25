import React, { Component } from 'react'
import { Modal, Select } from 'antd'

class AddCollabsModal extends Component {
    state={
        addedCollabs: [],
        collabData: [],
        userList: []
    }
    
    componentWillReceiveProps(){
        this.setResultList();
    }

    setResultList = () => {
        this.setState({ userList:[] });//empty user list
        this.props.userList && this.props.userList.map(( item, i ) => {
            this.setState({
                userList: [...this.state.userList, [
                    <Select.Option 
                        onClick={()=> this.addCollabToList( item )} 
                        key={ item.uid+i } 
                        value={ item.name }
                    >
                        { item.name}
                    </Select.Option>
                ]]
            })
        })
    };

    addCollabToList = collab => {
        this.setState({
            addedCollabs: [...this.state.addedCollabs, [collab.name]],
            collabData: [...this.state.collabData, [collab]]
        })
    };

    render(){
        const props = this.props;
        const state = this.state;
        return (
            <div className='col-12'>
                <Modal
                    visible={ props.collabModal }
                    onOk={()=> props.addCollab( state.collabData )}
                    onCancel={ props.addCollabSwitch }
                >
                    <div className='w-100'>
                        <div className='col-12 pt-3 mt-3'>
                            <Select 
                                mode='multiple'
                                style={{ width: '100%' }}
                                value={ state.addedCollabs }
                                onSearch={ props.searchCollab }
                                onChange={ props.handleChange }
                                tokenSeparators={[',']}
                            >
                                { state.userList }
                            </Select>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
};

export default AddCollabsModal;
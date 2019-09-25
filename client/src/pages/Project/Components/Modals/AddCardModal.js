import React from 'react'
import { Modal, Input } from 'antd'

const AddCardModal = props => {
    return (
        <div className='col-12'>
            <Modal
                visible={ props.cardModal }
                onOk={ props.createCard }
                onCancel={ props.cardModalSwitch }
            >
                <div className='col-12 pt-4'>
                    <Input 
                        name='cardName'
                        placeholder='Name the Card'
                        onChange={ props.handleInput }
                        onPressEnter={ props.createCard }
                        value={ props.cardName }
                    />
                </div>
            </Modal>
        </div>
    )
};

export default AddCardModal;
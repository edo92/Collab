import React from 'react'
import './style.css'

import TaskList from './Components/TaskCard'
import { Divider } from 'antd';

const ProjectViewBody = props => {
    let cards = props.cards;
    return (
        <div id='project-body-container'>
            <div className='col-12 p-0 pos-absolute'>
                <div className='col-12 bg-light' id='body-header'>

                </div>
                <Divider className='col-12 w-100 m-0'/>
            </div>
            <div id='project-body-inner' className='col-12'>
                <div className='col-12 p-0'>
                    <div className='col-12 scrollable'>
                        <div className='row col-12 p-3 wiki-box'>
                            { cards ? Object.keys( cards ).map(( card, i ) => {
                                return (
                                    <TaskList card={{name:card, tasks:cards[card].tasks}} key={ card }/>
                                )
                            }) : null }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectViewBody;
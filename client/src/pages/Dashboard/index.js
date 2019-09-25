import React from 'react'
import Header from '../../components/Headers/ClientHeader'
import DashboardBody from './Components/Body'
import DashboardFooter from './Components/Footer'

const DashboardPage = () => {
    return (
        <div className='col-12 p-0 ov-hidden'>
            <Header/>

            <DashboardBody/>

            <DashboardFooter/>
        </div>
    )
};

export default DashboardPage;
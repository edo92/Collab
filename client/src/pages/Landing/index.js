import React from 'react'
import Header from '../../components/Headers/MainHeader'
import HomeBanner from './Components/HomeBanner'

const LandingPage = () => {
    return (
        <div className='col-12 p-0'>
            <Header/>

            <HomeBanner/>
        </div>
    )
};

export default LandingPage;
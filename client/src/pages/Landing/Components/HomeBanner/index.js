import React from 'react'
import './style.css'

class HomeBanner extends React.Component{
    constructor(){
        super()

        this.state={

        };
    };

    render(){
        const bannerImg = 'https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/e7aca1993e4ad6e7cb6a8fe20a60d6ea/updated-layouts-board.png';
        return(
            <div id='banner-container' className='col-12'>
                <div id='banner-inner'>
                    <div id='banner-content' className='row col-12'>
                        <div className='col-12 col-md-6 p-0'>
                            <div id='banner-text' className='col-12 p-0'>
                                <h1 className='clip-dash'></h1> 
                                <h1 className='text-title'>Collab</h1>
                                <h1 className='text-title'>Task Managment</h1>
                                <div className='col-12'>
                                    <p className='sub-text m-0'>Collab Tasks is easy interface tool that helps you </p>
                                    <p className='sub-text p-1'>Keep track of you tasks </p>
                                </div>
                                <div className='row col-12 pt-3 respons-btn'>
                                    <a className='col-6 banner-bttn btn-style-1'>Learn More</a>
                                    <a className='col-6 banner-bttn btn-style-2'>Deatels</a>
                                </div>
                            </div>
                        </div>
                        <div id='banner-img-container' className='col-12 col-md-6'>
                            <img id='banner-img' className='img-fluid' src={ bannerImg }/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default HomeBanner;
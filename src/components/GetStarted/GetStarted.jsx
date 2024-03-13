import React from 'react'
import './GetStarted.css'
const GetStarted = () => {
    return (
        <section className='g-wrapper' id='GetStarted'>
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className='primaryText' >Get started with Homyz</span>
                    <span className='secondaryText font-semibold '>Subscribe and find super attractive price quotes from us.<br />
                        Find your residence soon</span>
                    <button className='button font-semibold '>
                        <a href="mailto:homzy@gmail.com">Get started</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted
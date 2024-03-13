import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'


const Contact = () => {
    return (
        <>
            <section className='c-wrapper' id='Contact'>
                <div className="paddings innerWidth flexCenter  c-container">

                    {/* left side*/}
                    <div className='flexColStart c-left'>
                        <span className='orangeText'>Our Contact Us</span>
                        <span className='primaryText'>Easy to contact us</span>
                        <span className='secondaryText font-semibold '>We always ready to help by providing the best services for you. We beleive a good blace to live can make your life better</span>

                        <div className='flexcolStart contactModes'>
                            {/*first row*/}

                            <div className='flexStart row'>

                                <div className='flexColCenter mode'>

                                    <div className='flexStart'>

                                        <div className='flexCenter icon'>
                                            <MdCall size={25} />
                                        </div>

                                        <div className='flexColStart details'>
                                            <span className='primaryText'>Call</span>
                                            <span className='secondaryText'>+039 123 145 16</span>
                                        </div>

                                    </div>

                                    <div className='flexCenter button'>
                                        Call Now
                                    </div>

                                </div>

                                {/*second mode*/}
                                <div className='flexColCenter mode'>

                                    <div className='flexStart'>

                                        <div className='flexCenter icon'>
                                            <BsFillChatDotsFill size={25} />
                                        </div>

                                        <div className='flexColStart details'>
                                            <span className='primaryText'>Chat Now</span>
                                            <span className='secondaryText'>+039 123 145 16</span>
                                        </div>

                                    </div>

                                    <div className='flexCenter button'>
                                        Chat Call Now
                                    </div>

                                </div>


                            </div>



                            {/*Second row */}

                            <div className='flexStart row' >

                                <div className='flexColCenter mode'>

                                    <div className='flexStart'>

                                        <div className='flexCenter icon'>
                                            <MdCall size={25} />
                                        </div>

                                        <div className='flexColStart details'>
                                            <span className='primaryText'>Video Call</span>
                                            <span className='secondaryText'>+039 123 145 16</span>
                                        </div>

                                    </div>

                                    <div className='flexCenter button'>
                                        Video Call Now
                                    </div>

                                </div>

                                {/*fourth mode*/}
                                <div className='flexColCenter mode'>

                                    <div className='flexStart'>

                                        <div className='flexCenter icon'>
                                            <HiChatBubbleBottomCenter size={25} />
                                        </div>

                                        <div className='flexColStart details'>
                                            <span className='primaryText'>Message Now</span>
                                            <span className='secondaryText'>+039 123 145 16</span>
                                        </div>

                                    </div>

                                    <div className='flexCenter button'>
                                        Message Now
                                    </div>

                                </div>


                            </div>


                        </div>
                    </div>

                    {/* right side*/}
                    <div className='c-right flexCenter '>
                        <div className='image-container '>
                            <img src="./contact.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}

export default Contact
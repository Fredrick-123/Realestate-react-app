import logo from '/logo.png';
import facebook from '/facebook.svg'
import twitter from '/twitter.svg'
import instagram from '/instagram.svg'
import linkedin from '/linkedin.svg'
import { MdEmail } from "react-icons/md";
import './Footer.css'




const Footer = () => {
    return (
        <div className='bg-[#131110] md:px-14 p-4 max-w-screen-2xl mx-auto text-white md:mt-5' id='ContactUs'>

            <div className='my-12 flex flex-col  md:flex-row gap-10'>

                <div className='md:w-1/2 space-y-8'>

                    <a href="/" className='text-2xl   font-semibold flex items-center space-x-3 text-primary'>

                        <img src={logo} alt="site logo" className='w-22 inline-block  items-center' /></a>
                    <p className='md:w-1/2'>A simple paragraph is comprised of three major components.
                        The first sentence, which is often a declarative sentence.</p>




                    <div className='search-bar bn flexCenter  '>
                        <MdEmail color='#4066ff' size={25} />
                        <input type="email" name='email' id="email" placeholder='your email' className='bg-[#FFF] py-2 px-4 rounded-md focus:outline-none' />
                        <input type="submit" onClick={() => window.location = 'mailto:homyz@gmail.com'} value={"Subscribe"} className='px-4 py-2 bg-[#4066ff]  bg-secondary rounded-md -ml-2 button bn hover:text-primary transition-all duration-500 font-medium' />
                    </div>

                </div>

                {/*footer navigation*/}
                <div className=' md:w-2/3 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className=' space-y-6 mt-5'>
                        <h4 className='text-xl'>Platform</h4>
                        <ul className='space-y-3'>
                            <li> <a href='/'>Overview</a > </li>
                            <li>   <a href='/'>Features</a></li>
                            <li>   <a href='/'>About</a></li>
                            <li>  <a href='/'>Pricing</a></li>
                        </ul>
                    </div>

                    <div className=' space-y-6 mt-5'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-3'>
                            <li><a href='/'>How does it works?</a ></li>
                            <li><a href='/'>Where to ask question?</a ></li>
                            <li><a href='/'>How to pay?</a ></li>
                            <li><a href='/'>What is needed for this?</a ></li>
                        </ul>
                    </div>

                    <div className=' space-y-6 mt-5'>
                        <h4 className='text-xl'>Contacts</h4>
                        <ul className='space-y-3'>
                            <li> <a href='/'> (012) 1234-567-890 </a></li>
                            <li> <a href='/'>123 xyz xyz </a></li>
                            <li> <a href='/'>qwuerybaihefv</a></li>
                            <li><a href='/'>qiwu - hrebcl 095467</a></li>

                        </ul>
                    </div>
                </div>

            </div>
            <hr />

            <div className='flex flex-col md:flex-row justify-between items-start gap-8 sm:items-center my-4'>
                <p>@ HOMYZ 1991 --- 2023. All rights reserved.</p>
                <div className='flex items-center space-x-5'>
                    <img src={facebook} alt="" className='w-8 cursor-pointer hover:-translate-y-4 duration-500 transition-all' />
                    <img src={instagram} alt="" className='w-8 cursor-pointer hover:-translate-y-4 duration-500 transition-all' />
                    <img src={twitter} alt="" className='w-8 cursor-pointer hover:-translate-y-4 duration-500 transition-all' />
                    <img src={linkedin} alt="" className='w-8 cursor-pointer hover:-translate-y-4 duration-500 transition-all' />
                </div>

            </div>

        </div>
    )
}

export default Footer
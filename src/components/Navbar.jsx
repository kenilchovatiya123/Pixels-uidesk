import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXing } from '@fortawesome/free-brands-svg-icons'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        // navbar sction start
        <div className='h-screen bg-[url("/src/assets/hero-background.jpg")] bg-no-repeat bg-center bg-cover'>
            <nav className='bg-blue-950 w-full h-16 flex justify-between items-center px-4 md:px-20 fixed top-0 right-0'>
                {/* navbar logo start */}
                <div>
                    <h1 className='text-3xl md:text-4xl text-white font-bold cursor-pointer tracking-tighter'><FontAwesomeIcon icon={faXing} className='text-white'/>PIXELS</h1>
                </div>
                {/* navbar logo end */}
                {/* navbar menu start */}
                <ul className='hidden md:flex items-center text-white text-lg font-normal'>
                    <li className='cursor-pointer mx-[14px]'>
                        <Link to="hero"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500} >
                            Home
                        </Link>
                    </li>
                    <li className='cursor-pointer mx-[14px]'>
                        <Link to="about"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500} >
                            About
                        </Link>
                    </li>
                    <li className='cursor-pointer mx-[14px]'>
                        <Link to="users"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500} >
                            Support
                        </Link>
                    </li>
                    <li className='cursor-pointer mx-[14px]'>
                        <Link to="pricing"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500} >
                            Pricing
                        </Link>
                    </li>
                    <li className='cursor-pointer mx-[14px]'>
                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            offset={80}
                            duration={500} >
                            Contact
                        </Link>
                    </li>
                </ul>
                {/* navbar menu end */}
                {/* navbar button start */}
                <div className='md:block hidden'>
                    <button className='px-6 py-2 bg-blue-600 text-white text-lg font-medium hover:bg-opacity-80 rounded-md transition duration-300 ease-in-out'>Sign in</button>
                </div>
                {/* navbar button end */}

                <i className='text-white md:hidden block cursor-pointer'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FontAwesomeIcon icon={faBarsStaggered}
                        className='h-6 w-6' />
                </i>
                <div className={`absolute md:hidden top-16 left-0 w-full py-4 gap-6 text-gray-400 bg-white flex flex-col items-center font-medium text-lg shadow-sm transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                    style={{ transition: "transform 0.2s ease, opacity 0.6s ease-in-out" }}>
                    <li className='list-none w-full text-center p-3 hover:text-gray-800 transition-all cursor-pointer'><a href="#home">Home</a></li>
                    <li className='list-none w-full text-center p-3 hover:text-gray-800 transition-all cursor-pointer'><a href="#about">About</a></li>
                    <li className='list-none w-full text-center p-3 hover:text-gray-800 transition-all cursor-pointer'><a href="#pricing">Pricing</a></li>
                    <li className='list-none w-full text-center p-3 hover:text-gray-800 transition-all cursor-pointer'><a href="#contact">Contact</a></li>
                    <li className='list-none w-full text-center p-3 hover:text-gray-800 transition-all cursor-pointer'><a href="#users">Support</a></li>
                </div>
            </nav>

            {/* navbar main section */}
            <div className='flex flex-col items-center py-20 md:py-14 px-4 md:px-20 text-center'>
                {/* main heading */}
                <h1 className='text-gray-800 text-3xl md:text-5xl font-bold max-w-md md:max-w-4xl md:leading-tight mt-20 tracking-tight uppercase'>Your Vision <br /><span>Perfected in Every Pixel</span></h1>
                <p className='text-gray-400 text-lg md:text-xl font-medium py-6 max-w-md md:max-w-2xl mb-8'>"Discover how FuturePro Design empowers creators, businesses, and visionaries to craft stunning digital experiences. From design to deployment, we make every pixel count."</p>
                {/* buttons */}
                <div className='flex'>
                    <button className='bg-blue-600 py-3 px-6 md:py-4 md:px-8 text-white text-base font-semibold  hover:bg-opacity-90 rounded-md transition duration-300 ease-in-out'>Get Started</button>
                    <button className='bg-gray-300 py-3 px-6 md:py-4 md:px-8 ml-4 rounded-md text-gray-700 text-base font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out'>Learn More</button>
                </div>
            </div>
            {/* navbar main section ends */}
        </div>
        // navbar sction ends
    )
}

export default Navbar
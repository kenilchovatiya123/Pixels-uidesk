import React from 'react'
import AboutImg from '../assets/about-image.svg'
import AboutImg_2 from '../assets/about-image-2.svg'
import CheckBox from '../assets/check.png'
import Star from '../assets/star.png'

function About() {
    return (
        // about page start
        <>
            <div id='about' className='h-full bg-slate-50 py-12 md:py-20 px-4 md:px-20'>
                {/* section main heading */}
                <div className='flex flex-col items-center py-4 text-center'>
                    <h1 className='text-gray-800 text-4xl md:text-5xl font-bold'>We are ready to help</h1>
                    <p className='text-gray-400 text-lg md:text-xl font-normal py-4 max-w-xl md:max-w-xl'>At FuturePro Design, we’re passionate about creating tools that not only inspire but also elevate the standards of digital design.</p>
                </div>
                {/* about page image */}
                <div className='flex justify-center items-center py-8 md:py-20'>
                    <img src="https://startup-tailwind.preview.uideck.com/images/video.jpg"
                        className='w-[90%] rounded-md md:w-full'
                        alt="" />
                </div>
                {/* about section grid starts */}
                <div className='grid grid-rows-1 lg:grid-cols-2 py-10 px-4 gap-8'>
                    {/* left side */}
                    <div className='md:w-auto py-8'>
                        {/* heading */}
                        <h1 className='text-4xl md:text-5xl text-gray-800 font-bold md:max-w-xl max-w-md tracking-tight leading-tight'>Bring Ideas to Life with Future-Ready Tools</h1>
                        <p className='text-lg max-w-md md:max-w-xl text-gray-400 font-normal py-4 '>The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables.</p>
                        <p className='text-lg max-w-md md:max-w-xl text-gray-400 font-normal '>Discover how FuturePro Design empowers creators, businesses, and visionaries to craft stunning digital experiences.</p>
                        {/* featuers */}
                        <div className='grid grid-cols-2 gap-4 py-10 sm:grid-cols-2'>
                            <div className='flex items-center gap-3'>
                                <img src={CheckBox}
                                    className='h-8 w-8 bg-blue-100 p-2 rounded-md' />
                                <span className='text-lg font-semibold text-gray-400 tracking-tight'>Premium quality</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={CheckBox}
                                    className='h-8 w-8 bg-blue-100 p-2 rounded-md' />
                                <span className='text-lg font-semibold text-gray-400 tracking-tight'>No code required</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={CheckBox}
                                    className='h-8 w-8 bg-blue-100 p-2 rounded-md' />
                                <span className='text-lg font-semibold text-gray-400 tracking-tight'>Use for lifetime</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={CheckBox}
                                    className='h-8 w-8 bg-blue-100 p-2 rounded-md' />
                                <span className='text-lg font-semibold text-gray-400 tracking-tight'>Regular updates</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={CheckBox}
                                    className='h-8 w-8 bg-blue-100 p-2 rounded-md' />
                                <span className='text-lg font-semibold text-gray-400 tracking-tight'>Rich documentation</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={CheckBox}
                                    className='h-8 w-8 bg-blue-100 p-2 rounded-md' />
                                <span className='text-lg font-semibold text-gray-400 tracking-tight'>Developer friendly</span>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className='md:w-auto py-6'>
                        <img src={AboutImg} alt="" />
                    </div>
                </div>


                <div className='grid grid-rows-1 lg:grid-cols-2 py-10 px-4 gap-8'>
                    {/* left side */}
                    <div className='md:w-auto py-6'>
                        <img src={AboutImg_2} alt="" />
                    </div>
                    {/* right side */}
                    <div className='md:w-auto py-6 grid grid-flow-row gap-8'>
                        {/* heading */}
                        <div>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800 tracking-normal'>Bug free code</h2>
                            <p className='text-lg max-w-md md:max-w-xl text-gray-400 font-normal pt-2'>At NextGenEdge, we prioritize delivering high-quality, bug-free code to ensure smooth performance and reliability for our clients. Our team follows industry best practices and rigorous testing procedures to identify. </p>
                        </div>
                        {/* featuers */}
                        <div>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800 tracking-normal'>Premier support</h2>
                            <p className='text-lg max-w-md md:max-w-xl text-gray-400 font-normal pt-2'>Customer satisfaction is at the core of our services, and we provide premier support to ensure our clients receive the assistance they need when they need it. </p>
                        </div>
                        <div>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800 tracking-normal'>Regular updates</h2>
                            <p className='text-lg max-w-md md:max-w-xl text-gray-400 font-normal pt-2'>In an ever-evolving tech landscape, staying up-to-date with the latest features, enhancements, and security improvements is essential.</p>
                        </div>
                    </div>
                </div>
                {/* about section grid ends */}
            </div>


            {/* user review section start*/}
            <div id='users' className='h-full bg-slate-100 py-12 md:py-20 px-4 md:px-20'>
                {/* heading */}
                <div className='flex flex-col items-center py-4 text-center'>
                    <h1 className='text-gray-800 text-4xl md:text-5xl font-bold'>What Our User Says</h1>
                    <p className='text-gray-400 text-lg md:text-xl font-normal py-4 max-w-xl md:max-w-xl'>"Our users love how easy it is to bring their ideas to life. Don't just take our word for it—hear what they have to say."</p>
                </div>
                {/* user review cards start */}
                <div className='px-4 py-10 flex flex-col gap-8 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2'>
                    <div className='bg-white rounded-md shadow-sm p-8'>
                        <div className='flex gap-1'>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                        </div>
                        <p className='text-base md:text-lg text-gray-400 font-medium tracking-wide py-6'>"The intuitive interface and robust features have made my projects stand out. Highly recommend to anyone in the design field."</p>
                        <div className='flex items-center gap-6 pt-4'>
                            <img src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='h-14 w-14 rounded-full' alt="founder" />
                            <div>
                                <h2 className='text-lg font-semibold text-gray-600'>— Jane D.</h2>
                                <p className='text-base font-medium text-gray-400'>Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-md shadow-sm p-8'>
                        <div className='flex gap-1'>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                        </div>
                        <p className='text-base md:text-lg text-gray-400 font-medium tracking-wide max-w-80 py-6'>"The intuitive interface and robust features have made my projects stand out. Highly recommend to anyone in the design field."</p>
                        <div className='flex items-center gap-6 pt-4'>
                            <img src="https://images.pexels.com/photos/5882683/pexels-photo-5882683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='h-14 w-14 rounded-full' alt="founder" />
                            <div>
                                <h2 className='text-lg font-semibold text-gray-600'>— Mark R.</h2>
                                <p className='text-base font-medium text-gray-400'>Product Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-md shadow-sm p-8'>
                        <div className='flex gap-1'>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                            <i><img src={Star} alt="" className='h-5 w-5' /></i>
                        </div>
                        <p className='text-base md:text-lg text-gray-400 font-medium tracking-wide max-w-80 py-6'>"The intuitive interface and robust features have made my projects stand out. Highly recommend to anyone in the design field."</p>
                        <div className='flex items-center gap-6 pt-4'>
                            <img src="https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='h-14 w-14 rounded-full' alt="founder" />
                            <div>
                                <h2 className='text-lg font-semibold text-gray-600'>— Emily W.</h2>
                                <p className='text-base font-medium text-gray-400'>Freelancer</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* user review cards ends */}
            </div>
            {/* user review section ends */}
        </>
        // about page ends
    )
}

export default About
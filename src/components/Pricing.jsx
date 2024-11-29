import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons'

function Pricing() {
    return (
        // Pricing page Start
        <div id='pricing' className='h-full bg-slate-50 py-12 md:py-20 px-4 md:px-20'>
            {/* section main heading */}
            <div className='flex flex-col items-center py-4 text-center'>
                <h1 className='text-gray-800 text-4xl md:text-5xl font-bold'>Simple and Affordable Pricing</h1>
                <p className='text-gray-400 text-lg md:text-xl font-normal py-4 max-w-xl md:max-w-xl'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
            {/* price cards start */}
            <div className='px-4 py-10 flex flex-col gap-8 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2'>
                <div className=' bg-white rounded-md shadow-md p-8'>
                    {/* card heading*/}
                    <div>
                        <h1 className='text-3xl text-gray-800 font-bold'>$40 /mo</h1>
                        <p className='text-base text-gray-400 font-medium py-2'>Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.</p>
                    </div>
                    {/* card button */}
                    <div className='py-2'>
                        <button className='py-3 w-full bg-blue-600 text-base text-white font-semibold  hover:bg-opacity-80 rounded-md transition duration-300 ease-in-out'>Start Free Trial</button>
                    </div>
                    <div className='border border-b-0 border-gray-200 my-10'></div>
                    {/* features lists start*/}
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>All UI Components</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Use with Unlimited Projects</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Commercial Use</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Email Support</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleXmark} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Lifetime Access</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleXmark} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Free Lifetime Updates</p>
                        </div>
                    </div>
                    {/* features lists ends*/}
                </div>


                {/* card 2 start */}
                <div className='bg-white rounded-md shadow-md p-8'>
                    <div>
                        <h1 className='text-3xl text-gray-800 font-bold'>$399 /mo</h1>
                        <p className='text-base text-gray-400 font-medium py-2'>Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.</p>
                    </div>
                    <div className='py-2'>
                        <button className='py-3 w-full bg-blue-600 text-base text-white font-semibold  hover:bg-opacity-80 rounded-md transition duration-300 ease-in-out'>Start Free Trial</button>
                    </div>
                    <div className='border border-b-0 border-gray-200 my-10'></div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>All UI Components</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Use with Unlimited Projects</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Commercial Use</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Email Support</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Lifetime Access</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleXmark} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Free Lifetime Updates</p>
                        </div>
                    </div>
                </div>
                {/* card 2 ends */}

                {/* card 3 start */}
                <div className='bg-white rounded-md shadow-md p-8'>
                    <div>
                        <h1 className='text-3xl text-gray-800 font-bold'>$589 /mo</h1>
                        <p className='text-base text-gray-400 font-medium py-2'>Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.</p>
                    </div>
                    <div className='py-2'>
                        <button className='py-3 w-full bg-blue-600 text-base text-white font-semibold  hover:bg-opacity-80 rounded-md transition duration-300 ease-in-out'>Start Free Trial</button>
                    </div>
                    <div className='border border-b-0 border-gray-200 my-10'></div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>All UI Components</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Use with Unlimited Projects</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Commercial Use</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Email Support</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Lifetime Access</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                            <p className='text-base text-gray-400 font-medium'>Free Lifetime Updates</p>
                        </div>
                    </div>
                </div>
                {/* card 3 ends */}
            </div>
            {/* price cards ends */}
        </div>
        // Pricing page ends
    )
}

export default Pricing
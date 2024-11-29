import React from 'react'

function Contact() {
  return (
    // Contact Page Start
    <div id='contact' className='h-full bg-slate-100 py-12 md:py-20 px-4 md:px-20'>
      <div className='px-4 py-10 grid grid-flow-row lg:grid-cols-3 gap-8'>
        {/* Ticket Section Start */}
        <div className='bg-indigo-50 p-14 lg:col-span-2 col-span-1 rounded-sm'>
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>Need Help? Open a Ticket</h1>
          <p className='text-base font-medium text-gray-400 mb-8'>Our support team will get back to you ASAP via email.</p>
          {/* Ticket Form Start */}
          <form action="#">
            <div className='flex flex-wrap mx-[-16px]'>
              <div className='w-full px-4 md:w-1/2'>
                <div className='mb-8'>
                  <label htmlFor="name" className='block text-sm text-gray-800 font-medium mb-2'>Your Name</label>
                  <input type="text" id='name' placeholder='Enter your Name' className='w-full border border-transparent  rounded-md shadow-sm py-3 px-6 text-base outline-none' />
                </div>
              </div>
              <div className='w-full px-4 md:w-1/2'>
                <div className='mb-8'>
                  <label htmlFor="email" className='block text-sm text-gray-800 font-medium mb-2'>Your Email</label>
                  <input type="text" id='email' placeholder='Enter your Email' className='w-full border border-transparent rounded-md shadow-sm py-3 px-6 text-base outline-none' />
                </div>
              </div>
              <div className='w-full px-4'>
                <div className='mb-8'>
                  <label htmlFor="about" className='block text-sm text-gray-800 font-medium mb-2'>Your Message</label>
                  <textarea name='about' id='about' rows="5" placeholder='Enter your Message' className='w-full border border-transparent rounded-md shadow-sm py-3 px-6 text-base outline-none resize-none' />
                </div>
              </div>
              {/* Ticket Button */}
              <div className='w-full px-4'>
                <a href="#" className='text-base font-semibold text-white bg-blue-600 py-4 px-9 hover:bg-opacity-80 rounded-md transition duration-300 ease-in-out'>Submit Ticket</a>
              </div>
            </div>
          </form>
          {/* Ticket Form Ends */}
        </div>
        {/* Ticket Section Ends */}



        {/* Subscribe Section Start*/}
        <div className='bg-indigo-50 p-10 col-span-1 rounded-sm'>
          <h1 className='text-2xl font-bold text-gray-800 mb-2'>Subscribe to receive future updates</h1>
          <p className='text-base font-medium text-gray-400 mb-8'>Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.</p>
          <div className='border border-b-0 border-gray-300 my-10'></div>
          {/* Subscribe Form Start */}
          <form action="#">
            <div className='flex flex-wrap w-full'>
              <input type="text" placeholder='Enter your name' className='w-full border border-transparent rounded-md shadow-sm py-3 px-6 text-base outline-none mb-4' />
              <input type="email" placeholder='Enter your email' className='w-full border border-transparent rounded-md shadow-sm py-3 px-6 text-base outline-none mb-4' />
              {/* Subscribe Button */}
              <a href="#" className='w-full text-base text-center font-semibold text-white bg-blue-600 py-4 px-9 hover:bg-opacity-80 rounded-md transition duration-300 ease-in-out'>Subscribe</a>
            </div>
          </form>
          {/* Subscribe Form Ends */}
          <div className='py-6 text-center'>
            <p className='text-gray-400 text-base font-medium'>No spam guaranteed, So please don’t send any spam mail.</p>
          </div>
        </div>
        {/* Subscribe Section Ends*/}
      </div>
    </div>
    // Contact Page Ends
  )
}

export default Contact
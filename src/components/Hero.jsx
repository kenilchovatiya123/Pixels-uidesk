import React from 'react'
import LayoutImg from '../assets/FeatuersImage/layout.png'
import GearImg from '../assets/FeatuersImage/gear.png'
import ComponentImg from '../assets/FeatuersImage/component.png'
import LayerImg from '../assets/FeatuersImage/layer.png'
import MaximizeImg from '../assets/FeatuersImage/maximize.png'
import UpdateImg from '../assets/FeatuersImage/update.png'

function Hero() {
    return (
        // hero page start
        <div id='hero' className='h-full bg-slate-100 py-12 md:py-20 px-4 md:px-20 '>
            {/* heading */}
            <div className='flex flex-col items-center py-4 text-center'>
                <h1 className='text-gray-800 text-4xl md:text-5xl font-bold'>Main Features</h1>
                <p className='text-gray-400 text-lg md:text-xl font-normal py-4 max-w-xl md:max-w-xl'>Our platform combines innovative features like AI-driven design suggestions, seamless collaboration tools.</p>
            </div>
            {/* main featuers */}
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-flow-row py-20 px-4 gap-14'>
                <div>
                    <img src={LayoutImg} alt="Layout"
                        className='h-[62px] w-[62px] bg-blue-100 p-2 rounded-md transition ease-in duration-300 delay-75 hover:-translate-y-1 hover:scale-110' />
                    <h1 className='text-xl md:text-2xl text-gray-800 font-semibold py-6'>Smart Design AI</h1>
                    <p className='text-base text-zinc-400 font-medium'>Leverage advanced AI tools to generate intelligent design suggestions, enhancing creativity and streamlining the design process for users of all skill levels.</p>
                </div>
                <div>
                    <img src={LayerImg} alt="Layout"
                        className='h-[62px] w-[62px] bg-blue-100 p-2 rounded-md transition ease-in duration-300 delay-75 hover:-translate-y-1 hover:scale-110' />
                    <h1 className='text-xl md:text-2xl text-gray-800 font-semibold py-6'>Responsive Templates</h1>
                    <p className='text-base text-zinc-400 font-medium'>Choose from a wide variety of mobile-optimized templates that adapt seamlessly to all devices, ensuring your designs look great everywhere.</p>
                </div>
                <div>
                    <img src={ComponentImg} alt="Layout"
                        className='h-[62px] w-[62px] bg-blue-100 p-2 rounded-md transition ease-in duration-300 delay-75 hover:-translate-y-1 hover:scale-110' />
                    <h1 className='text-xl md:text-2xl text-gray-800 font-semibold py-6'>Real-Time Collaboration</h1>
                    <p className='text-base text-zinc-400 font-medium'>Work effortlessly with team members in real-time, sharing feedback and making adjustments on the fly to boost productivity and efficiency.</p>
                </div>
                <div>
                    <img src={GearImg} alt="Layout"
                        className='h-[62px] w-[62px] bg-blue-100 p-2 rounded-md transition ease-in duration-300 delay-75 hover:-translate-y-1 hover:scale-110' />
                    <h1 className='text-xl md:text-2xl text-gray-800 font-semibold py-6'>Unlimited Customization</h1>
                    <p className='text-base text-zinc-400 font-medium'>Unlock endless design possibilities with fully customizable options, allowing you to tailor every aspect of your project to your specific needs.</p>
                </div>
                <div>
                    <img src={MaximizeImg} alt="Layout"
                        className='h-[62px] w-[62px] bg-blue-100 p-2 rounded-md transition ease-in duration-300 delay-75 hover:-translate-y-1 hover:scale-110' />
                    <h1 className='text-xl md:text-2xl text-gray-800 font-semibold py-6'>Cloud Access Anywhere</h1>
                    <p className='text-base text-zinc-400 font-medium'>Access your projects from any location, on any device, with secure cloud storage and synchronized updates for smooth and continuous workflows.</p>
                </div>
                <div>
                    <img src={UpdateImg} alt="Layout"
                        className='h-[62px] w-[62px] bg-blue-100 p-2 rounded-md transition ease-in duration-300 delay-75 hover:-translate-y-1 hover:scale-110' />
                    <h1 className='text-xl md:text-2xl text-gray-800 font-semibold py-6'>Seamless Integrations</h1>
                    <p className='text-base text-zinc-400 font-medium'>Integrate seamlessly with popular tools and platforms, streamlining your workflow and ensuring compatibility with other applications for a unified design experience.</p>
                </div>
            </div>
        </div>
        // hero page ends
    )
}

export default Hero
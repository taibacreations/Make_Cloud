import Link from 'next/link'
import React from 'react'

const ServicesSection = () => {
    return (
        <section className='my-[10.6vh] max-w-[1480px] mx-auto px-4 xl:px-10'>
            <div>
                <div className='w-[800px] mx-auto'>
                    <h2 className='font-archivo-black'>Our Cloud Consulting Services</h2>
                </div>
                <div className='flex justify-center items-center gap-5 mt-[4vh]'>
                    <div className='w-[335px] h-auto rounded-[22px] relative'>
                        <div className='bg-[#E53023] w-12 h-12 rounded-full absolute left-0 top-0 flex justify-center items-center'><img src="/services-icon-1.svg" alt="icon" className='w-[25px] h-auto' /></div>
                        <Link href="#" className='bg-[#345CA7] w-12 h-12 rounded-full absolute right-0 bottom-0 flex justify-center items-center hover:bg-[#E53023] transition-all duration-300'><img src="/arrow.svg" alt="arrow" className='w-[12px] h-auto' /></Link>
                        <img src="services-1.png" alt="pic" className='w-full h-auto rounded-[22px]' />
                        <h4 className='services absolute bottom-[11%]'>Cloud Strategy & Support</h4>
                    </div>
                    <div className='w-[335px] h-auto rounded-[22px] relative'>
                        <div className='bg-[#E53023] w-12 h-12 rounded-full absolute left-0 top-0 flex justify-center items-center'><img src="/services-icon-2.svg" alt="icon" className='w-[25px] h-auto' /></div>
                        <Link href="#" className='bg-[#345CA7] w-12 h-12 rounded-full absolute right-0 bottom-0 flex justify-center items-center hover:bg-[#E53023] transition-all duration-300'><img src="/arrow.svg" alt="arrow" className='w-[12px] h-auto' /></Link>
                        <img src="services-2.png" alt="pic" className='w-full h-auto rounded-[22px]' />
                        <h4 className='services absolute bottom-[5%]'>Cloud Migration &Infrastruc ure Setup</h4>
                    </div>
                    <div className='w-[335px] h-auto rounded-[22px] relative'>
                        <div className='bg-[#E53023] w-12 h-12 rounded-full absolute left-0 top-0 flex justify-center items-center'><img src="/services-icon-3.svg" alt="icon" className='w-[25px] h-auto' /></div>
                        <Link href="#" className='bg-[#345CA7] w-12 h-12 rounded-full absolute right-0 bottom-0 flex justify-center items-center hover:bg-[#E53023] transition-all duration-300'><img src="/arrow.svg" alt="arrow" className='w-[12px] h-auto' /></Link>
                        <img src="services-3.png" alt="pic" className='w-full h-auto rounded-[22px]' />
                        <h4 className='services absolute bottom-[11%]'>Managed Cloud Services</h4>
                    </div>
                    <div className='w-[335px] h-auto rounded-[22px] relative'>
                        <div className='bg-[#E53023] w-12 h-12 rounded-full absolute left-0 top-0 flex justify-center items-center'><img src="/services-icon-4.svg" alt="icon" className='w-[25px] h-auto' /></div>
                        <Link href="#" className='bg-[#345CA7] w-12 h-12 rounded-full absolute right-0 bottom-0 flex justify-center items-center hover:bg-[#E53023] transition-all duration-300'><img src="/arrow.svg" alt="arrow" className='w-[12px] h-auto' /></Link>
                        <img src="services-4.png" alt="pic" className='w-full h-auto rounded-[22px]' />
                        <h4 className='services absolute bottom-[11%]'>Cloud Cost management</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
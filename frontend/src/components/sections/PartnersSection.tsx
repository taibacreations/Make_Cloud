import Image from 'next/image'
import React from 'react'

const PartnersSection = () => {
    return (
        <section className='bg-[#F7F9FC] h-[617px] px-4 xl:px-10'>
            <div className='max-w-[1480px] mx-auto pt-[12vh] pb-[13vh]'>
                <div className='w-[633px] mx-auto'>
                    <h2>Multi Cloud Certified Strategic Partners</h2>
                </div>
                <div className='flex justify-center items-center gap-6 mt-[4.5vh]'>
                    <div className='w-[452px] h-[247px] bg-[url(/partners-bg.png)] bg-cover bg-center rounded-[30px] relative'>
                        <div className='w-16 h-16 rounded-full absolute right-0 top-0 flex justify-center items-center bg-[#E53023] transition-all duration-300'><img src="/aws-logo.svg" alt="aws" className='w-[45px] h-auto' /></div>
                        <Image src="/partners-aws.svg" alt="aws" width={100} height={100} className='w-[244px] h-auto ml-[4.2vh] mt-[3.7vh]' />
                        <div className='border border-[#EDEDF1] w-[73%] my-[3vh]' />
                        <p className='font-roboto font-normal text-[18px] leading-[100%] text-black pl-8'>As official Amazon Web Services (AWS) Partners MakeCloud cover all aspects of deploying and operating business- critical application on AWS.</p>
                    </div>
                    <div className='w-[452px] h-[247px] bg-[url(/partners-bg.png)] bg-cover bg-center rounded-[30px] relative'>
                        <div className='w-16 h-16 rounded-full absolute right-0 top-0 flex justify-center items-center bg-[#E53023] transition-all duration-300'><img src="/azure-logo.svg" alt="azure" className='w-[35px] h-auto' /></div>
                        <Image src="/partners-azure.svg" alt="azure" width={100} height={100} className='w-[316px] h-auto ml-[4.2vh] mt-[4vh]' />
                        <div className='border border-[#EDEDF1] w-[73%] mb-[3vh] mt-[4vh]' />
                        <p className='font-roboto font-normal text-[18px] leading-[100%] text-black pl-8'>MakeCloud have extensive experience in helping businesses deploy, scale and manage their applications on Google Cloud.</p>
                    </div>
                    <div className='w-[452px] h-[247px] bg-[url(/partners-bg.png)] bg-cover bg-center rounded-[30px] relative'>
                        <div className='w-16 h-16 rounded-full absolute right-0 top-0 flex justify-center items-center bg-[#E53023] transition-all duration-300'><img src="/cloud-logo.svg" alt="cloud" className='w-[41px] h-auto' /></div>
                        <Image src="/partners-console.svg" alt="console" width={100} height={100} className='w-[232px] h-auto ml-[4.2vh] mt-[3.7vh]' />
                        <div className='border border-[#EDEDF1] w-[73%] my-[3vh]' />
                        <p className='font-roboto font-normal text-[18px] leading-[100%] text-black pl-8'>Our Microsoft Azure consultancy services help businesses and IT teams seamlessly migrate, optimise, and innovate in the cloud.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnersSection
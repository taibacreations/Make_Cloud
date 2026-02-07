import Image from 'next/image'
import React from 'react'

const FeaturesSection = () => {
    return (
        <section className='bg-[#F7F9FC] h-[650px]'>
            <div className='max-w-[1480px] mx-auto px-4 xl:px-10 pt-[10.5vh]'>
                <div>
                    <h2 className='font-normal font-archivo-black'>Why Choose MakeCloud</h2>
                </div>
                <div className='mt-[4.4vh] flex justify-center items-start'>
                    <div className='flex flex-col gap-6 w-[33%]'>
                        <div className='flex gap-4.5'>
                            <div>
                                <Image src="/tick.svg" height={100} width={100} alt='tick-mark' className='min-w-[30px] h-auto' />
                            </div>
                            <div>
                                <h4 className='font-normal font-archivo-black text-[22px] leading-[100%] uppercase text-black'>Architecture-first methodology</h4>
                                <p className='font-medium font-dm-sans text-[18px] leading-[28.8px] text-[#333E49] mt-[2.3vh]'>We design systems for long-term reliability, scalability, and maintainability, reducing operational risks and future rework.</p>
                            </div>
                        </div>
                        <div className='flex gap-4.5'>
                            <div>
                                <Image src="/tick.svg" height={100} width={100} alt='tick-mark' className='min-w-[30px] h-auto' />
                            </div>
                            <div>
                                <h4 className='font-normal font-archivo-black text-[22px] leading-[100%] uppercase text-black'>Security and compliance from day one </h4>
                                <p className='font-medium font-dm-sans text-[18px] leading-[28.8px] text-[#333E49] mt-[2.3vh]'>IAM, encryption, monitoring, and governance are implemented early to keep your cloud environment secure and audit-ready.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 w-[33%]'>
                        <div className='flex gap-4.5'>
                            <div>
                                <Image src="/tick.svg" height={100} width={100} alt='tick-mark' className='min-w-[30px] h-auto' />
                            </div>
                            <div>
                                <h4 className='font-normal font-archivo-black text-[22px] leading-[100%] uppercase text-black'>Cost clarity through FinOps</h4>
                                <p className='font-medium font-dm-sans text-[18px] leading-[28.8px] text-[#333E49] mt-[2.3vh]'>We apply FinOps frameworks to improve cost transparency, predict consumption, and optimize long-term cloud spending.</p>
                            </div>
                        </div>
                        <div className='flex gap-4.5'>
                            <div>
                                <Image src="/tick.svg" height={100} width={100} alt='tick-mark' className='min-w-[30px] h-auto' />
                            </div>
                            <div>
                                <h4 className='font-normal font-archivo-black text-[22px] leading-[100%] uppercase text-black'>Full lifecycle cloud consulting services</h4>
                                <p className='font-medium font-dm-sans text-[18px] leading-[28.8px] text-[#333E49] mt-[2.3vh]'>We guide your transformation from cloud assessment to design, strategy, and support.”</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 w-[33%]'>
                        <div className='flex gap-4.5'>
                            <div>
                                <Image src="/tick.svg" height={100} width={100} alt='tick-mark' className='min-w-[30px] h-auto' />
                            </div>
                            <div>
                                <h4 className='font-normal font-archivo-black text-[22px] leading-[100%] uppercase text-black'>Automation as a core principle</h4>
                                <p className='font-medium font-dm-sans text-[18px] leading-[28.8px] text-[#333E49] mt-[2.3vh]'>Infrastructure as Code, CI/CD, and observability reduce manual effort, increase consistency, and support faster delivery cycles.</p>
                            </div>
                        </div>
                        <div className='flex gap-4.5'>
                            <div>
                                <Image src="/tick.svg" height={100} width={100} alt='tick-mark' className='min-w-[30px] h-auto' />
                            </div>
                            <div>
                                <h4 className='font-normal font-archivo-black text-[22px] leading-[100%] uppercase text-black'>Long-term operational support</h4>
                                <p className='font-medium font-dm-sans text-[18px] leading-[28.8px] text-[#333E49] mt-[2.3vh]'>We remain involved after planning — supporting implementation, optimization, and continuous improvement as your cloud needs evolve.</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
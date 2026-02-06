import Link from 'next/link'
import React from 'react'

const Branding = () => {
  return (
    <section className='bg-white py-[1vh]'>
        <div className='max-w-[1490px] mx-auto px-4 xl:px-10 flex justify-between items-center'>
            <div className='flex justify-center items-center gap-3'>
                <img src="/aws.png" alt="aws" className='w-[69px] h-auto' />
                <img src="/baytech.png" alt="baytech" className='w-[69px] h-auto' />
                <img src="/console.png" alt="console" className='w-[69px] h-auto' />
            </div>
            <div className='flex items-center justify-center gap-3'>
                <Link className='bg-[#E53023] w-10 h-10 rounded-full flex justify-center items-center' href="#">
                <img src="/twitter.svg" alt="twitter" className='w-[19px] h-auto' />
                </Link>
                <Link className='bg-[#E53023] w-10 h-10 rounded-full flex justify-center items-center' href="#">
                <img src="/linkedin.svg" alt="linkedin" className='w-[19px] h-auto' />
                </Link>
            </div>
        </div>
    </section>
  )
}
  
export default Branding
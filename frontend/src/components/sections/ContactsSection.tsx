import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

const ContactsSection = () => {
    return (
        <section className='mt-[7.5vh]'>
            <div className=''>
                <div className='grid md:grid-cols-2 gap-8 items-stretch'>
                    {/* Left Side - Gradient Background */}
                    <div className='hero w-[967px] text-white relative overflow-hidden rounded-br-[20px] rounded-tr-[20px] pt-[10.6vh] pb-[11vh] pl-[13.5vw]'>
                        <Image src="/contact-vector.svg" height={100} width={100} alt='vector' className='w-[199px] h-auto absolute -top-6 -right-6 z-10' />
                        <Image src="/contact-name-vector.svg" height={100} width={100} alt='vector' className='h-auto absolute top-0 left-0 z-10' />

                        {/* Content */}
                        <div className='relative z-10 w-[611px]'>
                            <h2 className='font-normal h2 leading-[100%] font-archivo-black mb-6'>
                                LET'S START YOUR<br />CLOUD JOURNEY
                            </h2>

                            <p className='font-roboto font-normal text-white leading-[100%] mb-9 text-[18px]'>
                                Ready to transform your infrastructure? Our cloud experts are here to hel you navigate your digital transformation.
                            </p>

                            {/* Contact Info */}
                            <div className='space-y-6'>
                                {/* Phone */}
                                <div className='flex items-start gap-4'>
                                    <div className='bg-white w-12 h-12 flex justify-center items-center rounded-full text-black'>
                                        <Phone className='w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-[18px] font-roboto leading-[100%] text-white mb-2'>Call us directly</p>
                                        <a href='tel:+442036378933' className='text-[18px] font-roboto leading-[100%] text-white font-bold hover:underline'>
                                            +44 (0) 20 3637 8933
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className='flex items-start gap-4'>
                                    <div className='bg-white w-12 h-12 flex justify-center items-center rounded-full text-black'>
                                        <Mail className='w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-[18px] font-roboto leading-[100%] text-white mb-2'>Email us</p>
                                        <a href='mailto:hello@makecloud.com' className='text-[18px] font-roboto leading-[100%] text-white font-bold hover:underline'>
                                            hello@makecloud.com
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className='flex items-start gap-4'>
                                    <div className='bg-white w-12 h-12 flex justify-center items-center rounded-full text-black'>
                                        <MapPin className='w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-[18px] font-roboto leading-[100%] text-white mb-2'>Visit our office</p>
                                        <p className='text-[18px] font-roboto leading-[120%] text-white font-bold hover:underline'>
                                            Rothamsted Enterprises,<br />
                                            Harpenden, Hertfordshire AL5 2JQ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className='bg-[#F7F9FC] w-[900px] ml-auto border border-[#DADEE7] rounded-bl-[16px] rounded-tl-[16px] pt-[5.7vh] pl-[4.6vw] relative overflow-hidden'>
                        <Image src="/contact-vector-2.svg" height={100} width={100} alt='vector' className='w-[78px] absolute right-0 top-1/2 -translate-y-1/2 z-10' />
                        <div className='w-[562px]'>
                            <h3 className='font-normal font-archivo-black text-[22px] leading-[100%] text-black mb-6 uppercase'>
                                GET YOUR FREE CONSULTATION
                            </h3>

                            <form className='space-y-4'>
                                {/* Full Name */}
                                <div>
                                    <label htmlFor='fullName' className='block font-roboto text-[18px] font-normal leading-[100%] mb-2 text-black'>
                                        Full Name <span className='text-red-500'>*</span>
                                    </label>
                                    <Input
                                        id='fullName'
                                        type='text'
                                        required
                                        className='w-full h-[48px]'
                                        placeholder=''
                                    />
                                </div>

                                {/* Email and Phone */}
                                <div className='grid md:grid-cols-2 gap-4'>
                                    <div>
                                        <label htmlFor='email' className='block font-roboto text-[18px] font-normal leading-[100%] mb-2 text-black'>
                                            Email <span className='text-red-500'>*</span>
                                        </label>
                                        <Input
                                            id='email'
                                            type='email'
                                            required
                                            className='w-full h-[48px]'
                                            placeholder=''
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='phone' className='block font-roboto text-[18px] font-normal leading-[100%] mb-2 text-black'>
                                            Phone Number
                                        </label>
                                        <Input
                                            id='phone'
                                            type='tel'
                                            className='w-full h-[48px]'
                                            placeholder=''
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor='message' className='block font-roboto text-[18px] font-normal leading-[100%] mb-2 text-black'>
                                        Message <span className='text-red-500'>*</span>
                                    </label>
                                    <Textarea
                                        id='message'
                                        required
                                        rows={6}
                                        className='w-full resize-none h-[150px]'
                                        placeholder=''
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type='submit'
                                    className='bg-[#345CA7] hover:bg-blue-700 text-white font-bold font-roboto w-[562px] h-[43px] rounded-full text-[18px] cursor-pointer'
                                >
                                    Submit
                                </Button>

                                {/* Privacy Policy Checkbox */}
                                <div className='flex items-center gap-3 mt-[1vh]'>
                                    <Checkbox
                                        id='privacy'
                                        className='accent-[#345CA7] shadow-inner border border-[#DADEE7]'
                                        style={{ boxShadow: 'inset 0 2px 6px rgba(52, 92, 167, 0.15)' }}
                                    />
                                    <label htmlFor='privacy' className='block font-roboto text-[18px] font-normal leading-[100%] text-black'>
                                        By submitting this form, you agree to our Privacy Policy.
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactsSection
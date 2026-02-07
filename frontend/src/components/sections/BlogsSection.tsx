import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Calendar, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BlogsSection = () => {
  const caseStudies = [
    {
      id: 1,
      date: 'Dec 23, 2025',
      title: 'KICK-START 2026 FREE CLOUD INFRASTRUCTURE REVIEW',
      image: '/blogs-1.png',
    },
    {
      id: 2,
      date: 'Nov 20, 2025',
      title: 'ESTABLISHING A SECURE GOOGLE CLOUD LANDING ZONE',
      image: '/blogs-2.png',
    },
    {
      id: 3,
      date: 'Oct 1, 2025',
      title: 'THE STRATEGIC ROLE OF MANAGED CLOUD SERVICES',
      image: '/blogs-3.png',
    },
    {   
      id: 4,
      date: 'Dec 23, 2025',
      title: 'KICK-START 2026 FREE CLOUD INFRASTRUCTURE REVIEW',
      image: '/blogs-4.png',
    },
    {
      id: 1,
      date: 'Dec 23, 2025',
      title: 'KICK-START 2026 FREE CLOUD INFRASTRUCTURE REVIEW',
      image: '/blogs-1.png',
    },
    {
      id: 2,
      date: 'Nov 20, 2025',
      title: 'ESTABLISHING A SECURE GOOGLE CLOUD LANDING ZONE',
      image: '/blogs-2.png',
    },
    {
      id: 3,
      date: 'Oct 1, 2025',
      title: 'THE STRATEGIC ROLE OF MANAGED CLOUD SERVICES',
      image: '/blogs-3.png',
    },
    {   
      id: 4,
      date: 'Dec 23, 2025',
      title: 'KICK-START 2026 FREE CLOUD INFRASTRUCTURE REVIEW',
      image: '/blogs-4.png',
    },
  ]

  return (
    <section>
      <div className='max-w-[1480px] mx-auto px-4 xl:px-10 mt-[11.2vh]'>
        <div className='flex justify-between items-center mb-2 relative'>
          <h2 className='font-normal font-archivo-black'>
            Case Studies
          </h2>
        </div>

        <div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            {/* Moved CarouselPrevious and CarouselNext here to be inside <Carousel> */}
            <div className="flex items-center justify-end gap-2 relative mt-[-4.8vh] mb-[4.8vh]">
              <CarouselPrevious className='static translate-y-0 bg-[#345CA7] hover:bg-[#E53023] text-white border-none h-12 w-12 z-10 navigation cursor-pointer duration-200 transition-all' />
              <CarouselNext className='static translate-y-0 bg-[#345CA7] hover:bg-[#E53023] text-white border-none h-12 w-12 z-10 navigation cursor-pointer duration-200 transition-all' />
            </div>
            <CarouselContent className="-ml-4">
              {caseStudies.map((study) => (
                <CarouselItem 
                  key={study.id} 
                  className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className='group cursor-pointer'>
                    {/* Image */}
                    <div className='relative overflow-hidden'>
                      <img
                        src={study.image}
                        alt={study.title}   
                        className='w-full h-full object-cover transition-transform duration-300'
                      />
                    </div>

                    {/* Date */}
                    <div className='flex items-center gap-2 mb-3 text-[#E53023] relative top-[-14vh] left-[1.5vw]'>
                      <Calendar className='w-5 h-5' />
                      <span className='font-roboto font-bold text-[18px] text-black'>{study.date}</span>
                    </div>

                    {/* Title and Arrow */}
                    <div className='flex items-start justify-between gap-3 relative pl-7 pr-22'>
                      <h3 className='font-normal font-archivo-black text-[22px] text-black leading-[100%] uppercase mt-[-13.5vh] relative'>
                        {study.title}
                      </h3>
                      <Button
                        size="icon"
                        className='bg-[#345CA7] hover:bg-[#E53023] text-white rounded-full h-12 w-12 absolute right-0 bottom-10 cursor-pointer duration-200 transition-all'
                      >
                        <ArrowUpRight className='w-5 h-5' />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default BlogsSection
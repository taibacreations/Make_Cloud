"use client"
import React, { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const ChooseSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const carouselData = [
    {
      image: "/api/placeholder/400/300",
      icon: "🔒",
      title: "CLOUD MIGRATION & OPTIMISATION",
      description: "IAM encryption, monitoring and governance are implemented early to keep your cloud environment secure and audit-ready."
    },
    {
      image: "/api/placeholder/400/300",
      icon: "⚡",
      title: "PERFORMANCE & SCALABILITY",
      description: "Optimize your infrastructure for peak performance with auto-scaling capabilities and load balancing."
    },
    {
      image: "/api/placeholder/400/300",
      icon: "💰",
      title: "COST OPTIMIZATION",
      description: "Reduce cloud spending with intelligent resource allocation and automated cost management tools."
    },
    {
      image: "/api/placeholder/400/300",
      icon: "🛡️",
      title: "SECURITY & COMPLIANCE",
      description: "Enterprise-grade security measures with compliance standards including SOC2, HIPAA, and GDPR."
    }
  ]

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className='py-[12vh]'>
      <div>
        <div className='w-full max-w-[689px] mx-auto mb-[4.3vh]'>
          <h2 className='font-archivo-black text-center text-3xl md:text-4xl lg:text-5xl'>
            Why Companies Choose Make Cloud
          </h2>
        </div>
        
        <div className='w-full overflow-hidden'>
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="flex items-center">
              {carouselData.map((item, index) => {
                const isCenter = index === current
                
                return (
                  <CarouselItem 
                    key={index} 
                    className="basis-auto flex justify-center"
                  >
                    <div 
                      className={`relative rounded-[20px] overflow-hidden transition-all duration-500 ease-in-out ${
                        isCenter 
                          ? 'w-[742px] h-[344px] scale-100' 
                          : 'w-[670px] h-[290px] scale-100 opacity-60'
                      }`}
                    >
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>
                      </div>
                      
                      {/* Content - Only visible when centered */}
                      {isCenter && (
                        <div className="relative h-full flex flex-col justify-end p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                          <div className="bg-white rounded-lg p-6 shadow-lg">
                            <div className="flex items-start gap-4">
                              {/* Icon */}
                              <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white text-xl">
                                {item.icon}
                              </div>
                              
                              {/* Text Content */}
                              <div className="flex-1">
                                <h3 className="font-bold text-base mb-2 uppercase tracking-wide">
                                  {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
          </Carousel>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8 overflow-visible">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-[10px] h-[10px] rounded-full transition-all duration-300 relative overflow-visible ${
                  index === current 
                    ? 'bg-[#345CA7] border border-[#345CA7] rounded-full pagination overflow-visible' 
                    : 'bg-black'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseSection
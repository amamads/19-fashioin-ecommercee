'use client'

import { cn } from "@/lib/utils"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import { useState } from "react"
import ThumbnailPlugin from "../../plugin/ThumbnailPlugin"

export default function ProductGallery({ images }: { images: { alt: string; url: string, order: number }[] }) {
  const [currentSlide, setCurrentSlide] = useState(2)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 5,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  // const images = [
  //   { title: "banner-1", imageUrl: '/banner-1.png', order: 1 },
  //   { title: "banner-2", imageUrl: '/banner-2.png', order: 2 },
  //   { title: "banner-3", imageUrl: '/banner-3.png', order: 3 },
  //   { title: "banner-4", imageUrl: '/banner-4.png', order: 4 },
  //   { title: "banner-5", imageUrl: '/banner-4.png', order: 5 },
  // ]

  return (
    <div className="flex flex-col gap-3 w-full max-w-lg mx-auto">
      <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden shadow-xl">
        {images.map((banner, index) => (
          <div key={index} className="keen-slider__slide relative w-full h-90 aspect-video">
            <Image
              src={banner.url}
              alt={banner.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider mt-2">
        {images.map((banner, index) => (
          <div
            key={index}
            className={cn(
              "keen-slider__slide h-20 relative overflow-hidden rounded-md cursor-pointer transition-all duration-300 border-2 border-transparent scale-100",
              currentSlide === index ? "opacity-100 scale-95" : "opacity-50 hover:opacity-75"
            )}
          >
            <Image
              src={banner.url}
              alt={banner.alt}
              fill
              className="object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
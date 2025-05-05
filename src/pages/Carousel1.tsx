
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export const Carousel1=()=> {
  return (
    <div>
      <Carousel>
  <CarouselContent>
  <CarouselItem className="md:basis-1/2 lg:basis-1/3">ONE</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">TWO</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">THREE</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  )
}


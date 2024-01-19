import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import home from "../../../assets/HOME2.jpg"

export function CarouselDemo() {
  return (
    <Carousel className=" w-2/3 bg-black">
      <CarouselContent className="bg-black">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 bg-black">
            <div className="">
              <Card className="bg-black">
                <CardContent className="flex aspect-square items-center justify-center p-0 bg-black">
                  <img src={home} alt="" className="w-full h-full rounded-md border-5 border-black  object-cover "/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getPhotos } from "@/components/api/photoApi"
import { useEffect, useState } from "react"

export function CarouselDemo() {

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    getPhotos().then((res) => {
      setPhotos(res.data.photos)
    })
  }, [])

  return (
    <Carousel className=" w-2/3">
      <CarouselContent className="">
        {photos.map((photo, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card className="">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img src={photo.photoUrl} alt="" className="w-full h-full rounded-md border-5 border-black  object-cover "/>
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

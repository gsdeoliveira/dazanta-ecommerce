import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

const SeuTime = () => {
  const times = [
    {
      title: 'Flamengo',
      src: '/flamengo.webp',
    },
    {
      title: 'Fortaleza',
      src: '/fortaleza.webp',
    },
    {
      title: 'Ceará',
      src: '/Ceara.webp',
    },
    {
      title: 'Bahia',
      src: '/Bahia.png',
    },
    {
      title: 'Botafogo',
      src: '/botafogo.webp',
    },
    {
      title: 'Barcelona',
      src: '/barcelona.png',
    },
    {
      title: 'Real Madrid',
      src: '/real-madrid.webp',
    },
    {
      title: 'Corinthians',
      src: '/corinthians.webp',
    },
    {
      title: 'Fluminense',
      src: '/fluminense.png',
    },
  ]
  return (
    <section className="mt-20">
      <div className="flex items-center justify-between my-5">
        <h2 className="text-xl sm:text-2xl">Seu time do coração</h2>
      </div>
      <Carousel opts={{ align: 'center' }}>
        <CarouselContent>
          {times.map((time) => (
            <CarouselItem
              key={time.title}
              className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
            >
              <div className="flex flex-col justify-center items-center bg-white hover:bg-dazantaBlue rounded-md h-fit p-2 hover:p-1 sm:p-3 transition-all duration-200">
                <Image
                  src={time.src}
                  width={200}
                  height={200}
                  alt={time.title}
                  className=""
                />
                <p className="text-black text-center text-xs sm:text-sm md:text-base lg:text-xl py-2">
                  {time.title}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default SeuTime

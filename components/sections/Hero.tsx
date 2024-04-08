import { MoveRight } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center gap-x-3">
      <div className="md:w-1/2 flex flex-col gap-5 text-center md:text-start">
        <h1 id="main-header" className="text-5xl sm:text-6xl lg:text-[72px]">
          Vista o seu time com estilo
        </h1>
        <p>
          Encontre a Coleção Exclusiva de Blusas Personalizadas para Torcedores
          Apaixonados. Escolha Seu Time, Escolha Seu Estilo!
        </p>
        <Button
          className="flex items-center self-center md:self-start w-fit gap-3"
          variant="secondary"
        >
          Ver Destaques
          <MoveRight width={16} className="arrow-icon" />
        </Button>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/Flamengo3.png"
          width={700}
          height={700}
          className="w-full"
          priority
          alt="Camisa branca do Flamengo"
        />
      </div>
    </section>
  )
}

export default Hero

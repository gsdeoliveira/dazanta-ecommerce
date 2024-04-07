import { MoveRight } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="mt-[60px] flex flex-col md:flex-row md:items-center gap-x-3 md:p-10">
      <div className="md:w-1/2 flex flex-col gap-5 text-center md:text-start p-5 md:p-0">
        <h1 id="main-header" className="text-5xl sm:text-6xl md:text-[72px]">
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
    </main>
  )
}

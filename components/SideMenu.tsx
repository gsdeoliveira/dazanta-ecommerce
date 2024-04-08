import { Menu } from 'lucide-react'
import Image from 'next/image'

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Search from './Search'
import { Button } from './ui/button'

const SideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="mt-3 cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-black text-white border-none p-0">
        <Image src={'/logo.png'} width={116} height={53} alt="Dazanta" />
        <Search className="w-[calc(100%-20px)] mx-auto mt-5 flex md:hidden" />
        <Accordion type="single" collapsible className="w-full p-5">
          <AccordionItem value="item-1">
            <AccordionTrigger>Futebol</AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="pl-5">
                  <AccordionTrigger>Brasileirão</AccordionTrigger>
                  <AccordionContent className="pl-5 flex items-center gap-2">
                    <Image
                      src="/flamengo.webp"
                      width={16}
                      height={16}
                      alt="Flamengo"
                    />
                    Flamengo
                  </AccordionContent>
                  <AccordionContent className="pl-5 flex items-center gap-2">
                    <Image
                      src="/bahia.png"
                      width={16}
                      height={16}
                      alt="Bahia"
                    />
                    Bahia
                  </AccordionContent>
                  <AccordionContent className="pl-5 flex items-center gap-2">
                    <Image
                      src="/botafogo.webp"
                      width={16}
                      height={16}
                      alt="Botafogo"
                    />
                    Botafogo
                  </AccordionContent>
                  <AccordionContent className="pl-5 flex items-center gap-2">
                    <Image
                      src="/Ceara.webp"
                      width={16}
                      height={16}
                      alt="Ceará"
                    />
                    Ceará
                  </AccordionContent>
                  <AccordionContent className="pl-5 flex items-center gap-2">
                    <Image
                      src="/fortaleza.webp"
                      width={16}
                      height={16}
                      alt="Fortaleza"
                    />
                    Fortaleza
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="pl-5">
                  <AccordionTrigger>Seleções</AccordionTrigger>
                  <AccordionContent className="pl-5 flex items-center gap-2">
                    <Image
                      src="/brasil.png"
                      width={16}
                      height={16}
                      alt="Brasil"
                    />
                    Brasil
                  </AccordionContent>
                  <AccordionContent className="pl-5 flex items-center gap-2">
                    <Image
                      src="/argentina.png"
                      width={16}
                      height={16}
                      alt="Argentina"
                    />
                    Argentina
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="pl-5">
                  <AccordionTrigger>La Liga</AccordionTrigger>
                  <AccordionContent className="pl-5 flex items-center gap-2">
                    <Image
                      src="/barcelona.png"
                      width={16}
                      height={16}
                      alt="Barcelona"
                    />
                    Barcelona
                  </AccordionContent>
                  <AccordionContent className="pl-5 flex items-center gap-2">
                    <Image
                      src="/real-madrid.webp"
                      width={16}
                      height={16}
                      alt="Real Madrid"
                    />
                    Real Madrid
                  </AccordionContent>
                  <AccordionContent className="pl-5 flex items-center gap-2">
                    <Image
                      src="/atletico-de-madrid.png"
                      width={16}
                      height={16}
                      alt="Atlético de Madrid"
                    />
                    Atlético de Madrid
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-4">
            NBA
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Categorias</AccordionTrigger>
            <AccordionContent>
              Yes. Its animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="items-center justify-center self-end w-full gap-x-3 flex md:hidden">
          <Button
            className="bg-black text-white border border-white"
            variant="ghost"
          >
            Entrar
          </Button>
          <Button className="bg-white text-black" variant="secondary">
            Criar Conta
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SideMenu

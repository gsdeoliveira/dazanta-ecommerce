import { Menu } from 'lucide-react'
import Image from 'next/image'

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const SideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="mt-3 cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-black text-white border-none p-0">
        <Image src={'/logo.png'} width={116} height={53} alt="Dazanta" />
        <Accordion type="single" collapsible className="w-full mt-5 p-5">
          <AccordionItem value="item-1">
            <AccordionTrigger>Futebol</AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="pl-5">
                  <AccordionTrigger>Brasileirão</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="pl-5">
                  <AccordionTrigger>Seleções</AccordionTrigger>
                  <AccordionContent>
                    Yes. Its animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">NBA</AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Categorias</AccordionTrigger>
            <AccordionContent>
              Yes. Its animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  )
}

export default SideMenu

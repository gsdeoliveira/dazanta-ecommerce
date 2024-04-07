import { Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

import { Input } from './ui/input'
import { Button } from './ui/button'
import SideMenu from './SideMenu'

const Navbar = () => {
  return (
    <nav className="fixed top-0 flex items-center gap-x-8 w-full px-3">
      <div className="flex items-center gap-x-1 md:gap-x-3">
        <div>
          <SideMenu />
        </div>
        <Image src={'/logo.png'} width={116} height={53} alt="Dazanta" />
      </div>
      <div className="hidden md:flex items-center gap-x-3 flex-1 text-black relative">
        <Input placeholder="Digite o que você procura..." />
        <Search className="absolute right-5 cursor-pointer" color="#1E1E1E" />
      </div>
      <div className="items-center gap-x-3 hidden md:flex">
        <ShoppingCart />
        <Button className="bg-white text-black" variant="secondary">
          Criar Conta
        </Button>
        <Button
          className="bg-black text-white border border-white"
          variant="ghost"
        >
          Entrar
        </Button>
      </div>
    </nav>
  )
}

export default Navbar

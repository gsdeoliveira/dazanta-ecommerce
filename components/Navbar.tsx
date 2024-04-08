import Image from 'next/image'

import { Button } from './ui/button'
import SideMenu from './SideMenu'
import Search from './Search'
import Cart from './Cart'

const Navbar = () => {
  return (
    <nav className="fixed max-w-[1440px] bg-black top-0 flex items-center justify-between gap-x-8 w-full px-3 md:px-10">
      <div className="flex items-center gap-x-1 md:gap-x-3">
        <div>
          <SideMenu />
        </div>
        <Image src={'/logo.png'} width={116} height={53} alt="Dazanta" />
      </div>
      <Search />
      <div className="items-center gap-x-3 hidden md:flex">
        <Cart />
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
      <Cart className="flex md:hidden" />
    </nav>
  )
}

export default Navbar

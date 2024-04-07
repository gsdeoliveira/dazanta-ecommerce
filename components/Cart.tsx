import { ShoppingCart } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

const Cart = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={className} {...props}>
      <Sheet>
        <SheetTrigger asChild className="cursor-pointer">
          <div className="relative">
            <ShoppingCart />
            <div className="flex items-center justify-center text-xs text-black w-4 h-4 bg-dazantaBlue rounded-full absolute -right-1 -top-1">
              1
            </div>
          </div>
        </SheetTrigger>
        <SheetContent side="right" className="bg-black text-white border-none">
          Carrinho Vazio
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Cart

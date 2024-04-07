import { cn } from '@/lib/utils'
import { Input } from './ui/input'
import { Search as SearchIcon } from 'lucide-react'

interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {}

const Search: React.FC<SearchProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'hidden md:flex items-center gap-x-3 flex-1 text-black relative',
        className,
      )}
      {...props}
    >
      <Input placeholder="Digite o que você procura..." />
      <SearchIcon
        className="absolute right-3 bg-white cursor-pointer"
        color="#1E1E1E"
      />
    </div>
  )
}

export default Search

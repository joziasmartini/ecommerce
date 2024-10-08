import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'
import ProductsDropdown from './ProductsDropdown'
import { useRouter } from 'next/navigation'

const user = {
  name: 'Jozias Martini',
  email: 'jozias.martini@email.com',
}

const userNavigation = [
  { name: 'Meu perfil', href: '/profile' },
  { name: 'Configurações', href: '/settings' },
  { name: 'Sair', href: '/logout' },
]

const cartNavigation = [
  { name: 'Meu carrinho', href: '/cart' },
  { name: 'Compras anteriores', href: '/history' },
]

type NavbarProps = {
  setSearchQuery: (query: string) => void
}

export default function Navbar({ setSearchQuery }: NavbarProps) {
  const router = useRouter()

  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className="bg-white shadow-sm data-[open]:fixed data-[open]:inset-0 data-[open]:z-40 data-[open]:overflow-y-auto lg:static lg:overflow-y-visible data-[open]:lg:static data-[open]:lg:overflow-y-visible"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
            <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
              <div className="flex flex-shrink-0 items-center">
                <a href="/" className="font-bold tracking-tighter text-xl">
                  COSMETICOS&CO
                </a>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-2">
              <ProductsDropdown />
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-5">
              <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    O que está buscando hoje?
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-400"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      type="search"
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="O que está buscando hoje?"
                      className="block w-full rounded-full border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
              {/* Mobile menu button */}
              <PopoverButton className="group relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </PopoverButton>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-3">
              {/* Cart dropdown */}
              <Menu as="div" className="relative flex-shrink-0">
                <div>
                  <MenuButton className="relative flex rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 text-gray-900 focus:ring-orange-500 focus:ring-offset-2">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <ShoppingCartIcon
                      aria-hidden="true"
                      className="h-9 w-9 p-2"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {cartNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <li
                        key={item.name}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer"
                        onClick={() => router.push(item.href)}
                      >
                        {item.name}
                      </li>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3 flex-shrink-0">
                <div>
                  <MenuButton className="relative flex rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 text-gray-900 focus:ring-orange-500 focus:ring-offset-2">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <UserIcon aria-hidden="true" className="h-9 w-9 p-2" />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <li
                        key={item.name}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer"
                        onClick={() => router.push(item.href)}
                      >
                        {item.name}
                      </li>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <PopoverPanel as="nav" aria-label="Global" className="lg:hidden">
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
              <div className="flex-shrink-0">
                <UserIcon aria-hidden="true" className="h-10 w-10 p-2" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  {user.name}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {user.email}
                </div>
              </div>
              <button
                type="button"
                className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
              {userNavigation.map((item) => (
                <li
                  key={item.name}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                  onClick={() => router.push(item.href)}
                >
                  {item.name}
                </li>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </>
  )
}

import { useCartContext } from '@/contexts/cartContext'
import { Product } from '@/types/product'
import { ShoppingCartIcon, StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState } from 'react'

type CardProps = Product & {
  href: string
}

export default function Card({
  id,
  name,
  description,
  image,
  price,
  rating,
  discount,
}: CardProps) {
  const { addProduct } = useCartContext()
  const [isProductAdded, setIsProductAdded] = useState(false)

  const handleProductClick = (
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    rating: number,
    discount: number,
  ) => {
    addProduct({ id, name, price, image, description, rating, discount })

    setIsProductAdded(true)
    setTimeout(() => {
      setIsProductAdded(false)
    }, 1000)
  }

  return (
    <div
      className={`group max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700`}
    >
      <Image
        className="rounded-t-lg w-full h-64 object-cover rounded-lg transition-all duration-200 group-hover:filter group-hover:brightness-105"
        src={'https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1'}
        alt=""
        width={1000}
        height={1000}
      />
      <div className="my-5">
        <a href="#">
          <h5 className="mb-2 text-2xl transition-all duration-300 font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="flex mb-4">
          {new Array(rating)
            .fill(rating)
            .map((i) => i)
            .map((_, index) => (
              <StarIcon
                key={index}
                className="h-4 w-4 mr-0.5 text-orange-500"
              />
            ))}
        </div>
        <div className="flex">
          <span className="mr-2 font-medium">R$ {price}</span>
          <span className="text-neutral-300 line-through">
            R$ {price - discount}
          </span>
        </div>
        <div className="flex">
          <button
            onClick={() =>
              handleProductClick(
                id,
                name,
                price,
                image,
                description,
                rating,
                discount,
              )
            }
            className="flex mt-4 bg-primary-500 text-orange-600 font-medium text-sm bg-orange-200 hover:bg-orange-600 hover:text-white transition-all duration-300 px-4 py-2 rounded-full"
          >
            <span>Adicionar</span>{' '}
            <ShoppingCartIcon className="h-4 w-4 ml-1 mt-0.5" />
          </button>
          {isProductAdded && (
            <span className="ml-2 mt-6 text-orange-500 font-medium text-sm">
              Adicionado!
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

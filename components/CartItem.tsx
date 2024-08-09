// components/CartItem.tsx
import React from 'react'
import { Product } from '@/types/product'
import Image from 'next/image'
import { TrashIcon } from '@heroicons/react/24/solid'

interface CartItemProps {
  product: Product
  addProduct: (product: Product) => void
  removeProduct: (id: number) => void
}

export default function CartItem({
  product,
  addProduct,
  removeProduct,
}: CartItemProps) {
  return (
    <div className="flex justify-between p-4 border-b border-gray-100">
      <div className="flex">
        <Image
          className="rounded-t-lg w-40 h-40 object-cover rounded-lg transition-all duration-200 group-hover:filter group-hover:brightness-105"
          src={'https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1'}
          alt=""
          width={1000}
          height={1000}
        />
        <div className="flex-col ml-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button
          type="button"
          className="flex items-center rounded-full w-10 h-10 p-2.5 font-semibold text-red-600 hover:bg-orange-200"
          onClick={() => removeProduct(product.id)}
        >
          <TrashIcon className="h-8 w-8" />
        </button>
        <button
          type="button"
          className="rounded-full bg-orange-50 px-4 py-1 text-sm font-semibold text-orange-600 hover:bg-orange-200 mb-3"
          onClick={() => addProduct(product)}
        >
          Adicionar Mais
        </button>
      </div>
    </div>
  )
}

'use client'

import { useCartContext } from '@/contexts/cartContext'
import CartItem from '@/components/CartItem'
import CartPrice from '@/components/CartPrice'

export default function Page() {
  const { products, addProduct, removeProduct } = useCartContext()

  console.log('Produtos no contexto: ', products)

  return (
    <div className="flex flex-col md:flex-row w-full p-6">
      <div className="md:w-2/3 w-full p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div>
          {products.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              addProduct={addProduct}
              removeProduct={removeProduct}
            />
          ))}
        </div>
      </div>
      <div className="md:w-1/3 w-full p-4 bg-gray-100 rounded-lg">
        <CartPrice />
      </div>
    </div>
  )
}

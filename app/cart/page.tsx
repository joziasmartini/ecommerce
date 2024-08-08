'use client'

import { useCartContext } from '@/contexts/cartContext'
import CartItem from '@/components/CartItem'
import CartPrice from '@/components/CartPrice'
import Navbar from '@/components/Navbar'

export default function Page() {
  const { products, addProduct, removeProduct } = useCartContext()

  console.log('Produtos no contexto: ', products)

  return (
    <>
      <Navbar setSearchQuery={() => {}} />
      <div className="flex flex-col md:flex-row w-full p-6">
        <div className="md:w-2/3 w-full p-4">
          <h1 className="text-2xl font-bold mb-4">Seu carrinho</h1>
          <div className="border border-neutral-100 rounded-lg p-4">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  addProduct={addProduct}
                  removeProduct={removeProduct}
                />
              ))
            ) : (
              <>Não há itens no carrinho.</>
            )}
          </div>
        </div>
        <div className="md:w-1/3 w-full p-4 bg-gray-100 rounded-lg">
          <CartPrice />
        </div>
      </div>
    </>
  )
}

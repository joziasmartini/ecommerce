'use client'

import React, { createContext, useState, ReactNode, useContext } from 'react'
import { Product } from '@/types/product'

interface CartContextType {
  products: Product[]
  addProduct: (product: Product) => void
  removeProduct: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])

  const addProduct = (product: Product) => {
    setProducts([...products, product])
    console.log('Produto adicionado.')
  }

  const removeProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider')
  }
  return context
}

export { CartProvider, useCartContext }

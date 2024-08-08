// components/TotalPrice.tsx
import { useState } from 'react'
import { useCartContext } from '@/contexts/cartContext'

export default function CartPrice() {
  const { products } = useCartContext()
  const [voucher, setVoucher] = useState('')

  const totalPrice = products.reduce((acc, product) => acc + product.price, 0)

  const handleVoucherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoucher(e.target.value)
  }

  const handlePayment = () => {
    alert('Ir para o pagamento')
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Resumo da Compra</h2>
      <div className="mb-4">
        <span className="text-lg">Valor total: </span>
        <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          value={voucher}
          onChange={handleVoucherChange}
          placeholder="Cupom"
          className="w-full p-2 border border-gray-300 rounded-full px-4 focus:ring-2 focus:ring-orange-500"
        />
        <button className="bg-black text-white py-3 font-medium ml-4 px-8 rounded-full w-40">
          Aplicar
        </button>
      </div>
      <button
        onClick={handlePayment}
        className="w-full bg-orange-600 text-white font-medium py-3 rounded-full"
      >
        Finalizar compra
      </button>
    </div>
  )
}

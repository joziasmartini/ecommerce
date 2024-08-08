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
      <div className="mb-4">
        <input
          type="text"
          value={voucher}
          onChange={handleVoucherChange}
          placeholder="Insira seu cupom de desconto"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={handlePayment}
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        Ir para o pagamento
      </button>
    </div>
  )
}

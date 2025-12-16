import useSWR from 'swr'
import { mockProducts } from '@/lib/mockProducts'
import type { Product } from '@/types/product'

const apiURL = process.env.NEXT_PUBLIC_API_URL

type ProductsResponse = {
  products: Product[]
  error?: string
}

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

export default function useProducts() {
  const endpoint = apiURL ? `${apiURL}/products` : null

  const { data, error, isLoading } = useSWR<ProductsResponse>(
    endpoint,
    fetcher,
    { shouldRetryOnError: false },
  )

  const isRemoteLoading = Boolean(endpoint && !data && !error)

  return {
    products: data?.products ?? mockProducts,
    error: undefined,
    isLoading: isRemoteLoading,
  }
}

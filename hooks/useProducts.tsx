import useSWR from 'swr'

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

export default function useProducts(id?: string) {
  const endpoint = id ? `/api/products/${id}` : '/api/products'

  const { data, error, isLoading } = useSWR(endpoint, fetcher)

  return {
    products: data,
    error: error,
    isLoading,
  }
}

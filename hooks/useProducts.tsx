import useSWR from 'swr'

const apiURL = process.env.NEXT_PUBLIC_API_URL

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

export default function useProducts(id?: string) {
  const endpoint = id ? `${apiURL}/products/${id}` : `${apiURL}/products`

  const { data, error, isLoading } = useSWR(endpoint, fetcher)

  return {
    products: id ? data : data?.products,
    error: error,
    isLoading,
  }
}

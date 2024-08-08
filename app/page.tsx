'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import HomeItemList from '@/components/HomeItemList'
import LoadMore from '@/components/LoadMore'
import Navbar from '@/components/Navbar'
import { Product } from '@/types/product'
import useProducts from '@/hooks/useProducts'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredItems, setFilteredItems] = useState<any>([])
  const [visibleItemsCount, setVisibleItemsCount] = useState(4)
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false)
  const { products, error, isLoading } = useProducts()

  if (error) return <div>Erro ao carregar os produtos.</div>

  if (searchQuery) {
    const filtered = products?.filter((product: Product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredItems(filtered)
  }

  const slicedItems = searchQuery
    ? filteredItems?.slice(0, visibleItemsCount)
    : products?.slice(0, visibleItemsCount)
  const hasMoreItems = searchQuery
    ? visibleItemsCount < filteredItems?.length
    : visibleItemsCount < products?.length

  const loadMoreItems = () => {
    setIsLoadMoreLoading(true)
    setTimeout(() => {
      setIsLoadMoreLoading(false)
      setVisibleItemsCount((prevCount) => prevCount + 4)
    }, 1000)
  }

  return (
    <main>
      <Navbar setSearchQuery={setSearchQuery} />
      {!searchQuery && <Hero />}
      <HomeItemList items={slicedItems} isLoading={isLoading} />
      {hasMoreItems && (
        <LoadMore onClick={loadMoreItems} isLoading={isLoadMoreLoading} />
      )}
    </main>
  )
}

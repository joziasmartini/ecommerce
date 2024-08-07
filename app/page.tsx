'use client'

import { useEffect, useState } from 'react'

import Hero from '@/components/Hero'
import HomeItemList from '@/components/HomeItemList'
import LoadMore from '@/components/LoadMore'
import Navbar from '@/components/Navbar'

import { Product } from '@/types/product'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredItems, setFilteredItems] = useState<any>([])
  const [visibleItemsCount, setVisibleItemsCount] = useState(4) // Start by showing the first 4 items

  useEffect(() => {
    const fetchFilteredItems = async () => {
      const productList: Product[] = [
        {
          id: '1',
          name: 'Product 1',
          description: 'Product 1 description',
          image: 'product-1.jpg',
          price: 100,
          rating: 4,
          discount: 10,
        },
        {
          id: '2',
          name: 'Product 2',
          description: 'Product 2 description',
          image: 'product-2.jpg',
          price: 200,
          rating: 5,
          discount: 20,
        },
        {
          id: '3',
          name: 'Product 3',
          description: 'Product 3 description',
          image: 'product-3.jpg',
          price: 300,
          rating: 3,
          discount: 30,
        },
        {
          id: '4',
          name: 'Product 4',
          description: 'Product 4 description',
          image: 'product-4.jpg',
          price: 400,
          rating: 2,
          discount: 40,
        },
        {
          id: '5',
          name: 'Product 5',
          description: 'Product 5 description',
          image: 'product-5.jpg',
          price: 500,
          rating: 1,
          discount: 50,
        },
        {
          id: '6',
          name: 'Product 6',
          description: 'Product 6 description',
          image: 'product-6.jpg',
          price: 600,
          rating: 5,
          discount: 60,
        },
        {
          id: '7',
          name: 'Product 7',
          description: 'Product 7 description',
          image: 'product-7.jpg',
          price: 700,
          rating: 4,
          discount: 70,
        },
        {
          id: '8',
          name: 'Product 8',
          description: 'Product 8 description',
          image: 'product-8.jpg',
          price: 800,
          rating: 3,
          discount: 80,
        },
        {
          id: '9',
          name: 'Product 9',
          description: 'Product 9 description',
          image: 'product-9.jpg',
          price: 900,
          rating: 2,
          discount: 90,
        },
        {
          id: '10',
          name: 'Product 10',
          description: 'Product 10 description',
          image: 'product-10.jpg',
          price: 1000,
          rating: 1,
          discount: 100,
        },
        {
          id: '11',
          name: 'Product 11',
          description: 'Product 11 description',
          image: 'product-11.jpg',
          price: 1100,
          rating: 5,
          discount: 110,
        },
        {
          id: '12',
          name: 'Product 12',
          description: 'Product 12 description',
          image: 'product-12.jpg',
          price: 1200,
          rating: 4,
          discount: 120,
        },
        {
          id: '13',
          name: 'Product 13',
          description: 'Product 13 description',
          image: 'product-13.jpg',
          price: 1300,
          rating: 3,
          discount: 130,
        },
        {
          id: '14',
          name: 'Product 14',
          description: 'Product 14 description',
          image: 'product-14.jpg',
          price: 1400,
          rating: 2,
          discount: 140,
        },
        {
          id: '15',
          name: 'Product 15',
          description: 'Product 15 description',
          image: 'product-15.jpg',
          price: 1500,
          rating: 1,
          discount: 150,
        },
        {
          id: '16',
          name: 'Product 16',
          description: 'Product 16 description',
          image: 'product-16.jpg',
          price: 1600,
          rating: 5,
          discount: 160,
        },
        {
          id: '17',
          name: 'Product 17',
          description: 'Product 17 description',
          image: 'product-17.jpg',
          price: 1700,
          rating: 4,
          discount: 170,
        },
        {
          id: '18',
          name: 'Product 18',
          description: 'Product 18 description',
          image: 'product-18.jpg',
          price: 1800,
          rating: 3,
          discount: 180,
        },
        {
          id: '19',
          name: 'Product 19',
          description: 'Product 19 description',
          image: 'product-19.jpg',
          price: 1900,
          rating: 2,
          discount: 190,
        },
        {
          id: '20',
          name: 'Product 20',
          description: 'Product 20 description',
          image: 'product-20.jpg',
          price: 2000,
          rating: 1,
          discount: 200,
        },
        {
          id: '21',
          name: 'Product 21',
          description: 'Product 21 description',
          image: 'product-21.jpg',
          price: 2100,
          rating: 5,
          discount: 210,
        },
        {
          id: '22',
          name: 'Product 22',
          description: 'Product 22 description',
          image: 'product-22.jpg',
          price: 2200,
          rating: 4,
          discount: 220,
        },
        {
          id: '23',
          name: 'Product 23',
          description: 'Product 23 description',
          image: 'product-23.jpg',
          price: 2300,
          rating: 3,
          discount: 230,
        },
        {
          id: '24',
          name: 'Product 24',
          description: 'Product 24 description',
          image: 'product-24.jpg',
          price: 2400,
          rating: 2,
          discount: 240,
        },
        {
          id: '25',
          name: 'Product 25',
          description: 'Product 25 description',
          image: 'product-25.jpg',
          price: 2500,
          rating: 1,
          discount: 250,
        },
        {
          id: '26',
          name: 'Product 26',
          description: 'Product 26 description',
          image: 'product-26.jpg',
          price: 2600,
          rating: 5,
          discount: 260,
        },
        {
          id: '27',
          name: 'Product 27',
          description: 'Product 27 description',
          image: 'product-27.jpg',
          price: 2700,
          rating: 4,
          discount: 270,
        },
        {
          id: '28',
          name: 'Product 28',
          description: 'Product 28 description',
          image: 'product-28.jpg',
          price: 2800,
          rating: 3,
          discount: 280,
        },
        {
          id: '29',
          name: 'Product 29',
          description: 'Product 29 description',
          image: 'product-29.jpg',
          price: 2900,
          rating: 2,
          discount: 290,
        },
        {
          id: '30',
          name: 'Product 30',
          description: 'Product 30 description',
          image: 'product-30.jpg',
          price: 3000,
          rating: 1,
          discount: 300,
        },
        {
          id: '31',
          name: 'Product 31',
          description: 'Product 31 description',
          image: 'product-31.jpg',
          price: 3100,
          rating: 5,
          discount: 310,
        },
        {
          id: '32',
          name: 'Product 32',
          description: 'Product 32 description',
          image: 'product-32.jpg',
          price: 3200,
          rating: 4,
          discount: 320,
        },
        {
          id: '33',
          name: 'Product 33',
          description: 'Product 33 description',
          image: 'product-33.jpg',
          price: 3300,
          rating: 3,
          discount: 330,
        },
        {
          id: '34',
          name: 'Product 34',
          description: 'Product 34 description',
          image: 'product-34.jpg',
          price: 3400,
          rating: 2,
          discount: 340,
        },
        {
          id: '35',
          name: 'Product 35',
          description: 'Product 35 description',
          image: 'product-35.jpg',
          price: 3500,
          rating: 1,
          discount: 350,
        },
        {
          id: '36',
          name: 'Product 36',
          description: 'Product 36 description',
          image: 'product-36.jpg',
          price: 3600,
          rating: 5,
          discount: 360,
        },
        {
          id: '37',
          name: 'Product 37',
          description: 'Product 37 description',
          image: 'product-37.jpg',
          price: 3700,
          rating: 4,
          discount: 370,
        },
        {
          id: '38',
          name: 'Product 38',
          description: 'Product 38 description',
          image: 'product-38.jpg',
          price: 3800,
          rating: 3,
          discount: 380,
        },
        {
          id: '39',
          name: 'Product 39',
          description: 'Product 39 description',
          image: 'product-39.jpg',
          price: 3900,
          rating: 2,
          discount: 390,
        },
        {
          id: '40',
          name: 'Product 40',
          description: 'Product 40 description',
          image: 'product-40.jpg',
          price: 4000,
          rating: 1,
          discount: 400,
        },
      ]
      const filtered = productList.filter((product: Product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredItems(filtered)
      setVisibleItemsCount(4) // Reset visible items count when search changes
    }

    fetchFilteredItems()
  }, [searchQuery])

  const loadMoreItems = () => {
    setVisibleItemsCount((prevCount) => prevCount + 4)
  }

  const slicedItems = filteredItems.slice(0, visibleItemsCount)
  const hasMoreItems = visibleItemsCount < filteredItems.length
  const isSearching = !!searchQuery

  return (
    <main>
      <Navbar setSearchQuery={setSearchQuery} />
      {!isSearching && <Hero />}
      <HomeItemList items={slicedItems} />
      {hasMoreItems && <LoadMore onClick={loadMoreItems} />}
    </main>
  )
}

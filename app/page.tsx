import Hero from '@/components/Hero'
import HomeItemList from '@/components/HomeItemList'
import LoadMore from '@/components/LoadMore'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HomeItemList />
      <LoadMore />
    </main>
  )
}

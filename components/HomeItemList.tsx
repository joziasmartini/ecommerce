import { Product } from '@/types/product'
import Card from './Card'
import { lineWobble } from 'ldrs'

lineWobble.register()

type HomeItemListProps = {
  items: Product[]
  isLoading: boolean
}

export default function HomeItemList({ items, isLoading }: HomeItemListProps) {
  return (
    <>
      <h3 className="text-center mt-16 mb-4 font-bold text-3xl">
        Descubra as maquiagens que combinam com você
      </h3>
      <p className="text-center mb-8">
        Realce o que há de melhor em você com nossas dicas e recomendações
        exclusivas
      </p>
      {isLoading ? (
        <div className="flex justify-center mt-20 mb-40">
          <l-line-wobble
            size="80"
            stroke="5"
            bg-opacity="0.1"
            speed="1.75"
            color="#ea580c"
          ></l-line-wobble>
        </div>
      ) : (
        <section className="grid lg:grid-cols-4 md:grid-cols-2 p-8 lg:w-[90%] gap-8 mx-auto">
          <>
            {items.map((product) => {
              return (
                <Card
                  key={product.id}
                  {...product}
                  href={`/product/${product.id}`}
                />
              )
            })}
          </>
        </section>
      )}
    </>
  )
}

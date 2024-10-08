import { Product } from '@/types/product'
import Card from './Card'
import { LineWobble } from '@uiball/loaders'

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
          <LineWobble size={64} speed={1.5} color="#ea580c" />
        </div>
      ) : (
        <section className="grid lg:grid-cols-4 md:grid-cols-2 p-8 lg:w-[90%] gap-8 mx-auto justify-center">
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

import { Product } from '@/types/product'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

type CardProps = Product & {
  href: string
}

export default function Card({
  name,
  description,
  image,
  href,
  price,
  rating,
  discount,
}: CardProps) {
  return (
    <div
      className={`group max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700`}
    >
      <a href="#">
        <Image
          className="rounded-t-lg w-full h-64 object-cover rounded-lg transition-all duration-200 group-hover:filter group-hover:brightness-105"
          src={'https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1'}
          alt=""
          width={1000}
          height={1000}
        />
      </a>
      <div className="my-5">
        <a href="#">
          <h5 className="mb-2 text-2xl transition-all duration-300 font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="flex mb-4">
          {new Array(rating)
            .fill(rating)
            .map((i) => i)
            .map((_, index) => (
              <StarIcon
                key={index}
                className="h-4 w-4 mr-0.5 text-orange-500"
              />
            ))}
        </div>
        <div className="flex">
          <span className="mr-2 font-medium">R$ {price}</span>
          <span className="text-neutral-300 line-through">
            R$ {price - discount}
          </span>
        </div>
      </div>
    </div>
  )
}

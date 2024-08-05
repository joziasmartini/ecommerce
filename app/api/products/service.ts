'use server'

import {
  CreateProductServiceRequest,
  CreateProductServiceResponse,
  DeleteProductServiceRequest,
  DeleteProductServiceResponse,
  GetProductServiceRequest,
  GetProductServiceResponse,
  GetProductsServiceRequest,
  GetProductsServiceResponse,
  UpdateProductServiceRequest,
  UpdateProductServiceResponse,
} from './types'

const productsApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/users`

export const getUser = async ({
  product: renamedProduct,
}: GetProductServiceRequest): Promise<GetProductServiceResponse> => {
  const res = await fetch(`${productsApiUrl}/${renamedProduct.id}`, {
    method: 'GET',
  })
  const { product, error } = await res.json()
  return { product, error }
}

export const getUsers =
  async ({}: GetProductsServiceRequest): Promise<GetProductsServiceResponse> => {
    const res = await fetch(productsApiUrl, {
      method: 'GET',
      cache: 'no-cache',
    })
    const { products, error } = await res.json()
    return { products, error }
  }

export const createUser = async ({
  product,
}: CreateProductServiceRequest): Promise<CreateProductServiceResponse> => {
  const res = await fetch(`${productsApiUrl}`, {
    method: 'POST',
    body: JSON.stringify(product),
  })
  const { success, error } = await res.json()
  return { success, error }
}

export const updateUser = async ({
  product,
}: UpdateProductServiceRequest): Promise<UpdateProductServiceResponse> => {
  const res = await fetch(`${productsApiUrl}/${product.id}`, {
    method: 'PATCH',
    body: JSON.stringify(product),
  })

  const { success, error } = await res.json()
  return { success, error }
}

export const deactivateUser = async ({
  product,
}: DeleteProductServiceRequest): Promise<DeleteProductServiceResponse> => {
  const res = await fetch(`${productsApiUrl}/${product.id}`, {
    method: 'UPDATE',
  })
  const { success, error } = await res.json()
  return { success, error }
}

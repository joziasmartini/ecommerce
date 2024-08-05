import { Product } from '@/types/product'

export interface GetProductServiceRequest {
  product: Product
}

export interface GetProductServiceResponse {
  product: Product | null
  error: string
}

export interface GetProductsServiceRequest {}

export interface GetProductsServiceResponse {
  products: Product[] | null
  error: string
}

export interface CreateProductServiceRequest {
  product: Product
}

export interface CreateProductServiceResponse {
  success: string
  error: string
}

export interface UpdateProductServiceRequest {
  product: Product
}

export interface UpdateProductServiceResponse {
  success: string
  error: string
}

export interface DeleteProductServiceRequest {
  product: Product
}

export interface DeleteProductServiceResponse {
  success: string
  error: string
}

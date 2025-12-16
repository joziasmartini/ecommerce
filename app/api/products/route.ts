import { NextRequest, NextResponse } from 'next/server'
import { mockProducts } from '@/lib/mockProducts'

export async function GET(request: NextRequest) {
  return NextResponse.json({ products: mockProducts, error: '' }, { status: 200 })
}

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        id: 'desc',
      },
    })

    return NextResponse.json({ products: products, error: '' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ products: null, error: error }, { status: 500 })
  }
}

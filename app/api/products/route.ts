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
    return NextResponse.json(
      { products: null, error: 'Internal error.' },
      { status: 500 },
    )
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json()
  const { name, email, role, plan, planExpiration, credits } = body

  const productExists = await prisma.product.findUnique({
    where: { email },
  })

  if (productExists) {
    return NextResponse.json(
      {
        success: '',
        error: 'product already exists.',
      },
      { status: 400 },
    )
  }

  try {
    const createdProduct = await prisma.product.create({
      data: {
        name,
        email,
        role,
        plan,
        planExpiration: planExpiration || null,
        credits: credits,
      },
    })

    return NextResponse.json(
      {
        success: 'product created successfully.',
        error: '',
      },
      { status: 201 },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        success: '',
        error: 'Internal error.',
      },
      { status: 500 },
    )
  }
}

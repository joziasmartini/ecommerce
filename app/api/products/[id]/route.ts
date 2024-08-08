import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params

  try {
    const product = await prisma.product.findUnique({
      where: { id },
    })

    if (!product) {
      return NextResponse.json(
        { product: null, error: 'Product not found.' },
        { status: 404 },
      )
    }

    return NextResponse.json({ product: product, error: '' })
  } catch (error) {
    return NextResponse.json(
      { product: null, error: 'Internal error.' },
      { status: 500 },
    )
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params
  const body = await req.json()
  const { name, email, password, plan, planExpiration, credits } = body

  if (
    !id ||
    !name ||
    !email ||
    !password ||
    !plan ||
    !planExpiration ||
    !credits
  ) {
    return NextResponse.json(
      {
        success: '',
        error:
          'Name, email, password, plan, plan expiration and credits are required.',
      },
      { status: 400 },
    )
  }

  let prismaQueryData: any = {
    name,
    email,
    password,
    plan,
    planExpiration,
    credits,
    updatedAt: new Date(),
  }

  try {
    await prisma.product.update({
      where: { id },
      data: prismaQueryData,
    })

    return NextResponse.json(
      { success: 'product updated with success.', error: '' },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { success: '', error: 'Internal error.' },
      { status: 500 },
    )
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params

  try {
    await prisma.product.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    })

    return NextResponse.json(
      { success: 'product deleted with success.', error: '' },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { success: '', error: 'Internal error.' },
      { status: 500 },
    )
  }
}

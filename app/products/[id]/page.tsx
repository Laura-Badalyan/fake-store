import { ProductDetail } from '@/components/ProductDetail';
import React from 'react'

type Params = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: Params) {

  const { id } = await params;

  return (
    <>
      <h1>ProductPage {id}</h1>
      <ProductDetail id={id} />
    </>
  )
}

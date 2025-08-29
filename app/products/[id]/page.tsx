import { ProductDetail } from '@/components/ProductDetail';
import React from 'react'

type Params = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: Params) {

  const { id } = await params;

  return (
    <div className='container mx-auto w-[60%] '>
      <ProductDetail id={id} />
    </div>
  )
}

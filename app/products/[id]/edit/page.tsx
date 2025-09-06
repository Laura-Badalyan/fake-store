import { EditProduct } from '@/components/EditProduct';
import React from 'react'

type Params = {
  params: Promise<{ id: string }>
}

export default async function EditProductPage({ params }: Params) {
  const { id } = await params;

  return (
    <div>
      <h1>Edit page</h1>
      <EditProduct id={id} />
    </div>
  )
}

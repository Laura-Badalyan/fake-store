import { Products } from '@/components/Products'
import React from 'react'
import { AddProductButton } from "@/components/AddProductButton";

export default function ProductPage() {


  return (
    <div>
      <h1 className=' text-3xl italic font-bold text-center p-4'>Products</h1>
      <AddProductButton />
      <Products />
    </div>
  )
}

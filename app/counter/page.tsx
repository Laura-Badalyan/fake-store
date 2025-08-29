import { Counter } from '@/components/Counter'
import React from 'react'

export default function CounterPage() {
    return (
        <div className=" w-[30%] mx-auto">
            <h1 className='text-center text-3xl py-8 uppercase '>Counter</h1>
            <Counter />
        </div>
    )
}

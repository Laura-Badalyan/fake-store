'use client'

import React from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'

import { decrement, increment } from '@/store/counterSlice'

export function Counter() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div className='flex justify-center items-center0'>
            <div className=' flex justify-between items-center gap-6 p-6 bg-white rounded-2xl shadow-md'>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    className='px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition cursor-pointer'
                >
                    Decrement
                </button>

                <span className='text-2xl font-bold text-gray-700'>{count}</span>

                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition cursor-pointer"
                >
                    Increment
                </button>
            </div>
        </div>
    )
}
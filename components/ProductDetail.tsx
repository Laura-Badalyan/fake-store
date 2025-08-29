"use client"

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { clearCurrent, deleteProduct, fetchProductById } from '@/store/productSlice';
import Image from 'next/image';
import React, { useEffect } from 'react'

import noImg from "@/public/noImage.png"
import { useRouter } from 'next/navigation';

export function ProductDetail({ id }: { id: string }) {

    const dispatch = useAppDispatch();
    const { current, status, error } = useAppSelector(state => state.products);
    const router = useRouter();

    useEffect(() => {
        dispatch(fetchProductById(Number(id)));

        return () => { dispatch(clearCurrent()) };

    }, [id, dispatch])

    if (status === "loading") return <p>Loading...</p>
    if (status === "failed") return <p>Error: {error}</p>
    if (status === "successed" && !current) return <p>No Result</p>
    if (!current) return;

    const handleDelete = () => {
        const statusCode = dispatch(deleteProduct(current.id)).unwrap()
        router.push("/products")
        console.log(statusCode);
    }


    return (
        <div className='flex flex-col items-center'>
            <h1 className=' text-3xl text-center p-4 font-bold text-fuchsia-950'>{current.title}</h1>
            <div className='h-[400px]'>
                <Image
                    src={current.image || noImg}
                    alt={current.title || ''}
                    width={300}
                    height={300}
                    priority
                    placeholder={"blur"}
                    blurDataURL={noImg.src}
                    quality={100}
                />
                <div className=' my-4 flex justify-between items-center'>
                    <button
                        onClick={() => router.push(`/products/${id}/edit`)}
                        className='px-12 py-2 border-2 border-blue-900 rounded-2xl font-bold text-blue-900 cursor-pointer hover:bg-blue-900 hover:text-white'
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className='px-12 py-2 border-2 border-red-700 rounded-2xl font-bold text-red-700 cursor-pointer hover:bg-red-700 hover:text-white'
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>

    )
}

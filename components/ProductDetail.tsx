"use client"

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { clearCurrent, deleteProduct, fetchProductById } from '@/store/productSlice';
import Image from 'next/image';
import React, { useEffect } from 'react'

import noImg from "@/public/noImage.svg"
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
        <div>
            <Image
                src={""}
                alt={""}
                width={300}
                height={300}
                priority
                placeholder={"blur"}
                blurDataURL={noImg.src}
                quality={100}
            />
            <button onClick={() => router.push(`/products/${id}/edit`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

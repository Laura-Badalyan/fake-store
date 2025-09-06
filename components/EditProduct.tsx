'use client';

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCurrent, fetchProductById, updateProduct } from "@/store/productSlice";
import { useEffect, useState } from "react";


export function EditProduct({ id }: { id: string }) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { current, status } = useAppSelector(state => state.products);
    const [title, setTitle] = useState('');

    useEffect(() => {
        dispatch(fetchProductById(Number(id)));

        return () => {
            dispatch(clearCurrent());
        }
    }, [id, dispatch]);

    useEffect(() => {
        setTitle(current?.title || "")
    }, [current])

    if (status === "loading" || !current) return <p>Loading... </p>

    const handelSave = async () => {
        const res = await dispatch(updateProduct({
            id: current.id,
            title
        })).unwrap();
        console.log(res);
        router.push(`/products/${current.id}`)
    }


    return (
        <div className="flex flex-col gap-3 max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
            <label className="text-gray-700 font-medium">Product Title:</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product title"
            />
            <button
                onClick={handelSave}
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
                SAVE
            </button>
        </div>

    )
}

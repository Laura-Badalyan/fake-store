'use client';

import { useAppDispatch } from "@/store/hooks";
import { createProduct } from "@/store/productSlice";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export function NewProductForm() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await dispatch(createProduct({
            ...product,
            price: parseFloat(product.price)
        })).unwrap();
        console.log(res);

        router.push("/products");
    }

    const handelChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }


    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                    type="text"
                    value={product?.title}
                    onChange={handelChangeInput}
                    name="title"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input
                    type="text"
                    value={product?.price}
                    onChange={handelChangeInput}
                    name="price"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input
                    type="text"
                    value={product?.description}
                    onChange={handelChangeInput}
                    name="description"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input
                    type="text"
                    value={product?.category}
                    onChange={handelChangeInput}
                    name="category"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                <input
                    type="text"
                    value={product?.image}
                    onChange={handelChangeInput}
                    name="image"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
                CREATE PRODUCT
            </button>
        </form>

    )
}

'use client';

import { useRouter } from "next/navigation";

export function AddProductButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/products/new")
    }

    return (
        <button
            onClick={handleClick}
            className="bg-blue-600 text-white font-semibold cursor-pointer py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
            Add Product
        </button>
    )
}

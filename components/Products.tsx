'use client'

import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { fetchProducts } from "@/store/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import noImg from "@/public/noImage.svg"

export function Products() {

  const dispatch = useAppDispatch();
  const { list, status, error } = useAppSelector(state => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts())
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading...</p>
  if (status === "failed") return <p>Error: {error}</p>

  return (
    <div className=" containere mx-auto ">
      <ul className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {list.map(product => <li key={product.id} className=" flex flex-col justify-center items-center shadow-md p-4">
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              priority
              placeholder={"blur"}
              blurDataURL={noImg.src}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "300px"
              }}
            />
            <div className="italic text-xl">{product.title}</div>
            <div className="font-bold">Price: {product.price} $</div>
          </Link>
        </li>)}
      </ul>
    </div>
  )
}

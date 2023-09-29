"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, SyntheticEvent } from "react";
import type { Brand } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { cn } from "@/lib/utils";

type Product = {
  id: number;
  title: string;
  price: number;
  brandId: number;
};

const UpdateProduct = ({
  brands,
  product,
}: {
  brands: Brand[];
  product: Product;
}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [brand, setBrand] = useState(product.brandId);

  const router = useRouter();

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    await axios.patch(`/api/products/${product.id}`, {
      title,
      price: Number(price),
      brandId: Number(brand),
    });
    router.refresh();
    setLoading(false);

    setOpen(false);
  };

  const handleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Dialog open={open}>
      <button
        className=" p-1 rounded-lg px-4 bg-blue-500 text-black"
        onClick={handleModal}
      >
        Edit
      </button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleUpdate}>
          <div className="form-control w-full">
            <label className="font-bold p-2">Product name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 border block w-full"
              placeholder="product name"
            />
          </div>
          <div className="form-control w-full">
            <label className="font-bold p-2">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="p-2 border block w-full"
              placeholder="Price"
            />
          </div>
          <div className="form-control w-full">
            <label className="font-bold p-2">Brand</label>
            <select
              value={brand}
              onChange={(e) => setBrand(Number(e.target.value))}
              className="p-2 block w-full mb-3"
            >
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleModal}
            type="button"
            className="p-2 bg-slate-400"
            disabled={loading}
          >
            Cancel
          </button>

          <button
            type="submit"
            className={cn(
              "ml-2 p-2 bg-blue-500 transition-all",
              loading && "bg-blue-200"
            )}
            disabled={loading}
          >
            Update
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;

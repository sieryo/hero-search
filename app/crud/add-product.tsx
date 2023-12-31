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

const AddProduct = ({ brands }: { brands: Brand[] }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    await axios.post("/api/products", {
      title,
      price: Number(price),
      brandId: Number(brand),
    });
    setTitle("");
    setPrice("");
    setBrand("");
    router.refresh();
    setLoading(false);

    setOpen(false);
  };

  const handleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Dialog open={open}>
      <button onClick={handleModal}>Open</button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
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
              onChange={(e) => setPrice(e.target.value)}
              className="p-2 border block w-full"
              placeholder="Price"
            />
          </div>
          <div className="form-control w-full">
            <label className="font-bold p-2">Brand</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="p-2 block w-full mb-3"
            >
              <option value="" disabled selected>
                Select Brand
              </option>
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
              "ml-2 p-2 bg-green-500 transition-all",
              loading && "bg-green-200"
            )}
            disabled={loading}
          >
            Save
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;

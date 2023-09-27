"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Brand } from "@prisma/client";

const AddProduct = ({ brands }: { brands: Brand[] }) => {
  const [open, setOpen] = useState(false);

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
        <form action="">
          <div className="form-control w-full">
            <label className="font-bold p-2">Product name</label>
            <input
              type="text"
              className="p-2 border block w-full"
              placeholder="product name"
            />
          </div>
          <div className="form-control w-full">
            <label className="font-bold p-2">Price</label>
            <input
              type="number"
              className="p-2 border block w-full"
              placeholder="Price"
            />
          </div>
          <div className="form-control w-full">
            <label className="font-bold p-2">Brand</label>
            <select name="" id="" className="p-2 block w-full mb-3">
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
          >
            Cancel
          </button>

          <button type="submit" className="ml-2 p-2 bg-green-500">
            Save
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;

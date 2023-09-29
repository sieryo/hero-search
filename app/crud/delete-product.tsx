"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";

type Product = {
  id: number;
  title: string;
  price: number;
  brandId: number;
};

const DeleteProduct = ({ product }: { product: Product }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async (productId: number) => {
    setLoading(true);
    await axios.delete(`/api/products/${productId}`);
    setLoading(false);
    setOpen(false);
    router.refresh();
  };

  const handleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Dialog open={open}>
      <button className="text-red-500" onClick={handleModal}>
        Delete
      </button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure to delete {product.title}?</DialogTitle>
        </DialogHeader>
        <button
          type="button"
          className={cn(
            " p-2 bg-red-500 transition-all",
            loading && "bg-red-200"
          )}
          disabled={loading}
          onClick={() => handleDelete(product.id)}
        >
          Delete
        </button>
        <button
          onClick={handleModal}
          type="button"
          className="p-2 bg-slate-400"
          disabled={loading}
        >
          Cancel
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProduct;

"use client";

import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
import Link from "next/link";
import { Button } from "../ui/button";
import { Pencil  } from "lucide-react";

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "collections",
    header: "Sản phẩm",
    cell: ({ row }) => row.original.collections.map((collection) => collection.title).join(", "),
  },
  {
    accessorKey: "quantity",
    header: "Số lượng",
  },
  {
    accessorKey: "category",
    header: "ĐVT",
  },
  {
    accessorKey: "price",
    header: "Giá bán (₫)",
  },
  {
    accessorKey: "expense",
    header: "Doanh thu (₫)",
  },
  {
    accessorKey: "title",
    header: "Người tạo",
    
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete item="product" id={row.original._id} />,
  },
  {
    id: "actions2",
    cell: ({ row }) => (
      <Link
        href={`/products/${row.original._id}`}
        className="hover:text-red-1"
      >
        <Button className="bg-blue-1 text-white">
          <Pencil/>
        </Button>
      </Link>
    ),
  },
];

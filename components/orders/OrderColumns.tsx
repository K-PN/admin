"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<OrderColumnType>[] = [
  {
    accessorKey: "_id",
    header: "ID",
    cell: ({ row }) => {
      return (
        <Link
          href={`/orders/${row.original._id}`}
          className="hover:text-red-1"
        >
          {row.original._id}
        </Link>
      );
    },
  },
  {
    accessorKey: "customer",
    header: "Khách hàng",
  },
  {
    accessorKey: "products",
    header: "Sản phẩm",
  },
  {
    accessorKey: "totalAmount",
    header: "Tổng tiền (VNĐ)",
  },
  {
    accessorKey: "createdAt",
    header: "Ngày tạo",
  },
];

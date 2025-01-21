import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
} from "lucide-react";

export const navLinks = [
  {
    url: "/",
    icon: <LayoutDashboard />,
    label: "Trang chính",
  },
  {
    url: "/collections",
    icon: <Shapes />,
    label: "Sản phẩm",
  },
  {
    url: "/products",
    icon: <Tag />,
    label: "Bảng kê",
  },
  {
    url: "/orders",
    icon: <ShoppingBag />,
    label: "Đơn hàng",
  },
  {
    url: "/customers",
    icon: <UsersRound />,
    label: "Khách hàng",
  },
];

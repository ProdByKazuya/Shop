import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export const useProductStore = () => useContext(ProductContext)
export const useProduct = () => useProductStore()?.product
export const useProducts = () => useProductStore()?.products
export const useProductStoreLoading = () => useProductStore()?.loading
import { IProduct } from "../../types/product";
import ProductCard from "../ProductCard";

interface ProductsListProps {
  products: IProduct[];
  isInTheCart?: boolean;
}

const CartList = ({ products, isInTheCart = false }: ProductsListProps) => {
  return (
    <>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          productIndex={index}
          isInTheCart={isInTheCart}
        />
      ))}
    </>
  );
};

export default CartList;

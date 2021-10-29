import ProductCard from "../ProductCard";
import { IProduct } from "../../types/product";
import { ContainerCart } from "./styles";

interface ProductsListProps {
  products: IProduct[];
  isInTheCart?: boolean;
}

const CartList = ({ products, isInTheCart = false }: ProductsListProps) => {
  return (
    <ContainerCart>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          productIndex={index}
          isInTheCart={isInTheCart}
        />
      ))}
    </ContainerCart>
  );
};

export default CartList;

import { IProduct } from "../../types/product";
import ProductCard from "../ProductCard";

interface ProductsListProps {
  products: IProduct[];
  isInTheCart?: boolean;
}

const ProductsList = ({ products, isInTheCart = false }: ProductsListProps) => {
  return (
    <>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} isInTheCart={isInTheCart} />
      ))}
    </>
  );
};

export default ProductsList;

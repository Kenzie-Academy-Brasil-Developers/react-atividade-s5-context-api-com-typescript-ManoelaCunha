import ProductCard from "../ProductCard";
import { IProduct } from "../../types/product";
import { ContainerProducts } from "./styles";

interface ProductsListProps {
  products: IProduct[];
  isInTheCart?: boolean;
}

const ProductsList = ({ products, isInTheCart = false }: ProductsListProps) => {
  return (
    <ContainerProducts>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} isInTheCart={isInTheCart} />
      ))}
    </ContainerProducts>
  );
};

export default ProductsList;

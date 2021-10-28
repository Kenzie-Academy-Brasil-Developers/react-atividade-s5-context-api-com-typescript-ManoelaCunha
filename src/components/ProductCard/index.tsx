import { useCart } from "../../providers/cart";
import { IProduct } from "../../types/product";

interface ProductCardProps {
  product: IProduct;
  productIndex?: number;
  isInTheCart?: boolean;
}

const ProductCard = ({
  product,
  productIndex,
  isInTheCart = false,
}: ProductCardProps) => {
  const { title, price, image } = product;

  const { addProduct, deleteProduct } = useCart();

  return (
    <div style={{ width: "300px", border: "1px solid black" }}>
      <img src={image} alt={title} width="100" height="180" />
      <p>{title}</p>
      <p>{price}</p>
      {isInTheCart ? (
        <button onClick={() => deleteProduct(Number(productIndex))}>
          Remover do Carrinho
        </button>
      ) : (
        <button onClick={() => addProduct(product)}>
          Adicionar no Carrinho
        </button>
      )}
    </div>
  );
};

export default ProductCard;

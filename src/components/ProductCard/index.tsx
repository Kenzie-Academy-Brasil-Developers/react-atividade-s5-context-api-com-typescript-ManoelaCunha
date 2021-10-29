import { Button, Paper, Typography } from "@material-ui/core";
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

  const handleAddProduct = () => {
    addProduct(product);
  };

  const handleDeleteProduct = () => {
    deleteProduct(Number(productIndex));
  };

  const boxCard = {
    width: "250px",
    margin: "40px 10px",
    padding: "5px",
  };

  const btnCard = {
    margin: "10px",
  };

  return (
    <Paper elevation={5} style={boxCard}>
      <img src={image} alt={title} width="100" height="180" />
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="h6" color="primary">
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
      {isInTheCart ? (
        <Button
          variant="contained"
          color="secondary"
          style={btnCard}
          onClick={handleDeleteProduct}
        >
          Remover do Carrinho
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          style={btnCard}
          onClick={handleAddProduct}
        >
          Adicionar no Carrinho
        </Button>
      )}
    </Paper>
  );
};

export default ProductCard;

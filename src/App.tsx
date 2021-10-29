import { useEffect, useState } from "react";
import { useCart } from "./providers/cart";
import { IProduct } from "./types/product";
import { products } from "./utils/products";

import ProductsList from "./components/ProductsList";
import CartList from "./components/CartList";

import GlobalStyles from "./styles/global";
import { Container } from "./styles/styles";
import { Typography } from "@material-ui/core";

const App = () => {
  const { cart } = useCart();

  const [productsList, setProductsList] = useState<IProduct[]>(
    [] as IProduct[]
  );

  useEffect(() => {
    setProductsList(products);
  }, []);

  const titleStyle = {
    width: "100%",
    color: "white",
    padding: "15px 0px",
    background: "dimgray",
  };

  return (
    <Container>
      <Typography variant="h5" style={titleStyle}>
        PRODUTOS
      </Typography>

      <ProductsList products={productsList} />

      <Typography variant="h5" style={titleStyle}>
        CARRINHO
      </Typography>

      <CartList products={cart} isInTheCart={true} />

      <GlobalStyles />
    </Container>
  );
};

export default App;

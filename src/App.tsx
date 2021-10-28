import { useEffect, useState } from "react";
import { useCart } from "./providers/cart";
import { IProduct } from "./types/product";
import { products } from "./utils/products";

import ProductsList from "./components/ProductsList";
import CartList from "./components/CartList";

import "./App.css";

const App = () => {
  const { cart } = useCart();

  const [productsList, setProductsList] = useState<IProduct[]>(
    [] as IProduct[]
  );

  useEffect(() => {
    setProductsList(products);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Produtos</h1>
          <ProductsList products={productsList} />
        </div>
        <div>
          <h1>Carrinho</h1>
          <CartList products={cart} isInTheCart={true} />
        </div>
      </header>
    </div>
  );
};

export default App;

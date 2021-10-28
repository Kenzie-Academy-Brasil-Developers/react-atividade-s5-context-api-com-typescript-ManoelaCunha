import { createContext, useContext, useState, ReactNode } from "react";
import { IProduct } from "../../types/product";

interface CartProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: IProduct[];
  addProduct: (product: IProduct) => void;
  deleteProduct: (productIndex: number) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<IProduct[]>([] as IProduct[]);

  const addProduct = (product: IProduct) => {
    setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDeleted: number) => {
    const newCart = cart.filter((_, index) => index !== productToBeDeleted);

    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

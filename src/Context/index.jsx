import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {apiService} from "../Services/apiService";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Products 
  const [products, setProducts] = useState(null);

  // Shopping card - count
  const [count, setCount] = useState(0);

  // Product detail - open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product detail - show product
  const [productToShow, setProductToShow] = useState(null);

  // Shopping card - add product to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Checkout side menu - open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Shopping card - My order
  const [myOrder, setMyOrder] = useState(null);

  // Shopping card - My orders
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    apiService.getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        myOrder,
        setMyOrder,
        myOrders,
        setMyOrders,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

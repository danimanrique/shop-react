import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { apiService } from "../Services/apiService";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Products
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

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

  // Search products
  const [search, setSearch] = useState("");

  // Search products by category
  const [category, setCategory] = useState("");

  const filterProductsByTitle = (items, search) => {
    return items?.filter((x) => x.title.toLowerCase().includes(search.toLowerCase()));
  };
  
  const filterProductsByCategory = (items, category) => {
    const filtered = items?.filter((x) => x.category.toLowerCase() === category.toLowerCase());
    return filtered;
  };
  
  useEffect(() => {
    apiService.getProducts().then((data) => {
      setProducts(data); 
      setFilteredProducts(data)
    });
  }, []);

  useEffect(() => {
    if (search && !category) setFilteredProducts(filterProductsByTitle(products, search));
    if (category && !search) setFilteredProducts(filterProductsByCategory(products, category));
    if (search && category) {
      const filteredByTitle = filterProductsByTitle(products, search);
      setFilteredProducts(filterProductsByCategory(filteredByTitle, category));
    }
    if (!search && !category) setFilteredProducts(products);
  }, [products, search, category]);

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
        search,
        setSearch,
        filteredProducts,
        setFilteredProducts,
        category,
        setCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

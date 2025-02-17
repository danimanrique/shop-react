import { BrowserRouter } from "react-router-dom";
import AppRouters from "../../Routes";
import Navbar from "../../Components/Navbar";
import LayoutContent from "../../Layouts/Content";
import "./App.css";
import { ShoppingCartProvider } from "../../Context";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <LayoutContent>
          <AppRouters />
          <Navbar />
          <CheckoutSideMenu />
        </LayoutContent>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;

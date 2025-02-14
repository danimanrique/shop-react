import { BrowserRouter } from "react-router-dom";
import AppRouters from "../../Routes";
import Navbar from "../../Components/Navbar";
import LayoutContent from "../../Layouts/Content";
import "./App.css";
import { ShoppingCartProvider } from "../../Context";

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <LayoutContent>
          <AppRouters />
          <Navbar />
        </LayoutContent>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;

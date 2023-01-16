import Footer from "./Componentes/Footer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./Componentes/ItemListContainer";
import NavBar from "./Componentes/NavBar";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import Error from "./Componentes/Error";
import CartContexProvider from "./Componentes/Context/CartContext";
import Cart from "./Componentes/Cart";
import Checkout from "./Componentes/Checkout";

function App() {
  return (
    <CartContexProvider>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart/>} />
            <Route path={"/checkout"} element={<Checkout/>} />
            <Route path={"*"} element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContexProvider>
  );
}

export default App;
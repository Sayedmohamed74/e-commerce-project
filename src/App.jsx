import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import ProviderUser from "./provider/ProviderUser";
import ProtectRouter from "./components/ProtectRouter";

function App() {
  return (
    <>
      <ProviderUser>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route element={<ProtectRouter/>}>
                <Route path="/Cart" element={<Cart />} />
              </Route>
              
              <Route path="/Sign-in" element={<SignIn />} />
            </Routes>
          </main>
        </BrowserRouter>
      </ProviderUser>
    </>
  );
}

export default App;

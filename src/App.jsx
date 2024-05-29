import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage, Home, Layout, ProductDetails, Shop } from "./router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home/>
              </Layout>
            }
          />
          <Route
            path="/shop"
            element={
              <Layout>
                <Shop/>
              </Layout>
            }
          />
          <Route
            path="/product-details/:productId"
            element={
              <Layout>
                <ProductDetails/>
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <CartPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;

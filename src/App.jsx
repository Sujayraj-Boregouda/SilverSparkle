import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layout, ProductDetails, Shop } from "./router";
import NotFound from "./NotFound";

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
            path="*"
            element={
              <Layout>
                <NotFound/>
              </Layout>
            }
          /> 
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;

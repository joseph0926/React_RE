import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";

/* const routeDefinition = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/products" element={<Products></Products>}></Route>
  </Route>
);

const router = createBrowserRouter(routeDefinition) */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/products", element: <Products></Products> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

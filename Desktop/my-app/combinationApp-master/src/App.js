import { Fragment } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainNavigations from "./components/Navigation/mainNavigation";
import CallForm from "./components/pages/callForm";
import Products from "./components/pages/products";
import "./app.css";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <MainNavigations /> },
    { path: "/call", element: <CallForm /> },
    { path: "/products", element: <Products /> },
  ]);
  return (
    <Fragment>
      <RouterProvider router={routes}></RouterProvider>
    </Fragment>
  );
}

export default App;

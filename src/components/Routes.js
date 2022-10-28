import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Blog from "./Blog";
import Faq from "./Faq";
import Login from "./Login";

import Root from "./Root";
import Card from "./Card";
import Chackout from "./Chackout";
import Registion from "./Registion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("http://localhost:5000/courses"),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/courses"),

        element: <Home></Home>,
      },
      {
        path: "home",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Home></Home>,
      },
      {
        path: "/blog",

        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
        element: <Card> </Card>,
      },
      {
        path: "/course/chackout",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
        element: <Chackout></Chackout>,
      },
      {
        path: "/register",
        element: <Registion></Registion>,
      },
    ],
  },
]);

export default router;

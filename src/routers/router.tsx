import { Home, Contact } from "@pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
]);

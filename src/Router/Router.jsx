import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home/Home";
import EventCardDetails from "../component/EventSpeaker/EventCardDetails";
import Registion from "../pages/Registion/Registion";
import LogIn from "../pages/LogIn/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./conference.json"),
      },
      {
        path: "/description/:id",
        element: <EventCardDetails></EventCardDetails>,
      },
      {
        path: "/registion",
        element: <Registion></Registion>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);

export default router;

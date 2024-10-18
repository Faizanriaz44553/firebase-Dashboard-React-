import Login from "../auth/Login/Login";
import Signup from "../auth/signup/signup";
// import Signup from "../auth/signup/signup";
import Home from "../pages/home/Home";

export const RouterSet = [
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: "Not found",
  },
];

import RestaurantList from "./components/RestaurantList"
import Form from "./components/Form";
import About from "./components/About";


const routes = [
  {
    path: "/",
    element: <RestaurantList/>,
  },
  {
    path: "/Form",
    element: <Form />,
  },
  {
    path: "/About",
    element: <About />,
  }
]
export default routes;
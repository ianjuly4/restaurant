import RestaurantList from "./components/RestaurantList"
import FormPage from "./components/FormPage";
import About from "./components/About";


const routes = [
  {
    path: "/",
    element: <RestaurantList/>,
  },
  {
    path: "/FormPage",
    element: <FormPage />,
  },
  {
    path: "/About",
    element: <About />,
  }
]
export default routes;
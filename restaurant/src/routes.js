import App from "./components/App"
import RestaurantForm from "./components/RestaurantForm";
import About from "./components/About";


const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/RestaurantForm",
    element: <RestaurantForm />,
  },
  {
    path: "/About",
    element: <About />,
  }
]
export default routes;
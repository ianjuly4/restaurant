import App from "./components/App"

import RestaurantForm from "./components/RestaurantForm";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/RestaurantForm",
    element: <RestaurantForm />
  }
]
export default routes;
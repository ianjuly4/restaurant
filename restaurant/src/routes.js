import App from "./components/App"
import Filter from "./components/Filter"

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Filter",
    element: <Filter />,
  }
]
export default routes;
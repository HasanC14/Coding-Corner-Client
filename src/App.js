import { RouterProvider } from "react-router-dom";
import { routes } from "./Route/PublicRoutes";
import "./App.css";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

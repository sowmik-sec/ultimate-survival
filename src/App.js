import { RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { routes } from "./routes/routes/routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;

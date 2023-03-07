import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes/routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;

import "./App.css";
import Gender from "./Components/Gender";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Gender />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Test pagina</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)

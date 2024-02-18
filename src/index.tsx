import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Users from "./routes/users"

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouterProps 
} from "react-router-dom";

import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./errorPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/users/",
        element:<Users/>
      }
    ]

  },
  
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App: React.FC = () => (
  <React.StrictMode>
    <div className="container">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

root.render(
  <App/>
);

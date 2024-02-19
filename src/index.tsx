import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";


import Users,{usersLoader} from "./routes/users"
import UserContent,{loadUserContent} from "./routes/userContent";
import UserCreate,{createUser} from "./routes/userCreate";
import UserEdit, { updateUser } from "./routes/userEdit";
import { deleteUser } from "./routes/userDelete";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouterProps 
} from "react-router-dom";

import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./errorPage"
import News, { loadNews } from "./routes/news";
import NewsContent,{loadArticle} from "./routes/newsContent";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/users/",
        element:<Users/>,
        loader:usersLoader,
        children:[
          {
            path:"/users/:userId",
            element:<UserContent/>,
            loader:async ({ request, params }) => {
              console.log({params});
              
              return loadUserContent({request,params});
            }
          },
          {
            path:"/users/edit/:userId",
            element:<UserEdit/>,
            loader:async ({ request, params }) => {
              console.log({params});
              const userId = params?.userId || "";
              return loadUserContent({request,params});
            },
            action:updateUser
          },
          {
            path:"/users/createUser",
            element: <UserCreate/>,
            action: createUser
          },
          {
            path:"/users/:userId/destroy",
            action:deleteUser
          }
        ]
      },
      {
        path:"/news/",
        element:<News/>,
        loader: loadNews,
      },
      {
        path:"/news/:id",
        element:<NewsContent/>,
        loader:async ({ request, params }) => {
          console.log({params});
          
          return loadArticle({request,params});
        }
      }
    ]

  },
  
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App: React.FC = () => (
  
    <div className="container">
      <RouterProvider router={router} />
    </div>
 
);

root.render(
  <App/>
);

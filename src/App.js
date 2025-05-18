import { lazy , useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name:"Jami",
    }
    setUserName(data.name);
  },[])

  return (
    <Provider store={appStore}> 
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element:<Body />
      },
      {
        path: "/about",
        element:<About />
      },
      {
        path: "/contact",
        element:<Contact />
      },
      {
        path: "/grocery",
        element: <Grocery />
      },
      {
        path: "/cart",
        element:<Cart />
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurantMenu />
      }
    ],
    errorElement:<Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
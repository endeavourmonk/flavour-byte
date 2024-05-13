import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Loading from "./src/components/Loading.js";

const About = lazy(() => import("./src/components/About.js"));
const Contact = lazy(() => import("./src/components/Contact.js"));
const Error = lazy(() => import("./src/components/Error.js"));
const RestaurantMenu = lazy(() => import("./src/components/RestaurantMenu.js"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:name/:resId",
        element: (
          <Suspense fallback={<Loading />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<Loading />}>
        <Error />
      </Suspense>
    ),
  },
]);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<RouterProvider router={appRouter} />);

import React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
  
  import BlogPage from "../pages/BlogPage";

  import CreatePost from "../pages/CreatePost"

  
  const router= createBrowserRouter([
    {
      path: "/",
      element: <BlogPage />,
    },
    {
      path: "/add-post",
      element: <CreatePost />,
    },
  ]);
  
  export default router;
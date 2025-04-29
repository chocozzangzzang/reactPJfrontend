import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Title from "./mini-pro/ui/Title";
import BlogMain from "./mini-pro/BlogMain";
import PostWrite from "./mini-pro/post/PostWrite";
import PostViewPage from "./mini-pro/post/PostViewPage";
import PostEditPage from "./mini-pro/post/PostEditPage";
import LoginPage from "./mini-pro/auth/LoginPage";
import ProtectedRoute from "./mini-pro/auth/ProtectedRoute";
import SignupPage from "./mini-pro/auth/SignupPage";

function App() {

  const [ isAuthenticated, setIsAuthenticated ] = useState(localStorage.getItem("JWTtoken"));

  // console.log(isAuthenticated);

  return (
    <BrowserRouter>
      <Title title={"MINI BLOG WITH REACT"} />
      <Routes>
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/" element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
          <Route index element={<BlogMain />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/post-write" element={<PostWrite />} />
          <Route path="/postDetail/:postId" element={<PostViewPage />} />
          <Route path="/postEdit/:postId" element={<PostEditPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;

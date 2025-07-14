import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./index.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Admin from "./components/Admin";
import Logout from "./components/Logout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useEffect, useState } from "react";
import UserProvider from "./contexts/UserContext";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/signup" element={<SignUp />} />

          <Route path="/app" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="admin" element={<Admin />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<p>Invalid route (404 Not Found)!!!</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import ForgotPasForm from './Components/ForgotPasForm/ForgotPasForm';
import DashBoard from "./Components/DashBoard";


function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot" element={<ForgotPasForm />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;

import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import ForgotPasForm from './Components/ForgotPasForm/ForgotPasForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<LoginForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="forgot" element={<ForgotPasForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;

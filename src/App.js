import { Route, Routes } from "react-router-dom";
import Footer from "./pages/components/footer";
import Navbar from "./pages/components/header";
import Home from "./pages/components/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import ResetPassword from "./pages/reset-password/reset";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route index path="/" element={<ResetPassword />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/verification-complete/:token_id" element={<ResetPassword />} />
          <Route exact path='/reset-password' element={<ResetPassword/>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Footer from "./pages/components/footer";
import Navbar from "./pages/components/header";
import Login from "./pages/login/login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

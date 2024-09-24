import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Signout from "./pages/Signout";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signout" element={<Signout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

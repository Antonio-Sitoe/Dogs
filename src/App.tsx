export const url = "https://dogsapi.origamid.dev/json";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;

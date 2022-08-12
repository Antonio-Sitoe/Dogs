import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./Contexts/UserContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import Photo from "./pages/Photo/Photo";
import UserProfile from "./pages/Profile/UserProfile";

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/conta/*" element={<ProtectedRoute />} />
            <Route path="/foto/:id" element={<Photo />} />
            <Route path="/perfil/:user" element={<UserProfile />} />
          </Routes>
          <Footer />
          <GlobalStyle />
        </>
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;

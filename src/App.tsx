import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./Contexts/UserContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./app/Home/Home";
import Login from "./app/Login/Login";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import Photo from "./app/Photo/Photo";
import UserProfile from "./app/Profile/UserProfile";
import NotFound404 from "./app/404";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/conta/*" element={<ProtectedRoute />} />
              <Route path="/foto/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </main>
          <Footer />
          <GlobalStyle />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;

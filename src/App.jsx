import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/auth/LoginPage/LoginPage";
import RegistrationPage from "./pages/auth/RegistrationPage/RegistrationPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/user/HomePage/HomePage";
import MessagesPage from "./pages/user/MessagesPage/MessagesPage";
import FindFriendsPage from "./pages/user/FindFriendsPage/FindFriendsPage";
import ProfilePage from "./pages/user/ProfilePage/ProfilePage";

function App() {
  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registrationPage" element={<RegistrationPage />} />
        <Route path="/user" element={<NavBar />}>
          <Route path="homePage" element={<HomePage />} />
          <Route path="messagesPage" element={<MessagesPage />} />
          <Route path="findFriendsPage" element={<FindFriendsPage />} />
          <Route path="profilePage" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

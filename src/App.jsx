import './App.css'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import NavBar from './components/NavBar'
import HomePage from './pages/user/HomePage/HomePage'
import MessagesPage from './pages/user/MessagesPage/MessagesPage'

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
        </Route>
      </Routes>
    
    </div>
  )
}

export default App
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import ProjectPage from './components/ProjectPage';
import HomeNavbar from './components/Navbars/HomeNavbar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

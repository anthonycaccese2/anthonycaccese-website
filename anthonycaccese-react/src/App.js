import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Aboutme from './Pages/Aboutme';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects/*" element={<Projects />}/>
        <Route path="/aboutme" element={<Aboutme />}/>
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;

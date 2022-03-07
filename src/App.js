import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import HeaderBar from './components/HeaderBar';
import Fly from './pages/fly';
import Home from './pages/home';
import Plan from './pages/plan';
import Play from './pages/play';
import Stay from './pages/stay';

function App() {

  return (
    <BrowserRouter>
    <HeaderBar />
      <Routes>
          <Route index element={<Home />} />
          <Route path='/fly' element={<Fly />} />
          <Route path='/stay' element={<Stay />} />
          <Route path='/play' element={<Play />} />
          <Route path='/plan' element={<Plan />} />       
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;

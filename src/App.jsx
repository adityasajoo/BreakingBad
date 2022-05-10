import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Character from './pages/Character';
import Nav from './pages/Nav';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

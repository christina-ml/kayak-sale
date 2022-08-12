import { Route, Routes } from 'react-router-dom';
import './App.scss';
import KayakCard from './components/KayakCard';
import KayakCart from './components/KayakCart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<KayakCard />} />
        <Route path="/cart" element={<KayakCart />} />
      </Routes>
    </div>
  );
}

export default App;

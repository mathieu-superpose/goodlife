import { Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home'
import Play from './pages/Play/Play'
import Result from './pages/Result/Result'

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="play" element={<Play />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;

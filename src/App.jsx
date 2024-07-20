import './App.css';
import {Route, Routes,BrowserRouter } from 'react-router-dom';
import Homepage from './components/Front/Homepage';
import Properties from './components/Property/Properties';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='properties' element={<Properties/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

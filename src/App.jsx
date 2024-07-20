import './App.css';
import {Route, Routes,BrowserRouter } from 'react-router-dom';
import Homepage from './components/Front/Homepage';
import Properties from './components/Property/Properties';
import Profile from './components/Profile/Profile';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/properties' element={<Properties/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

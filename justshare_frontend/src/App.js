import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './container/Home';
import Login from './components/Login';

function App() {
  return (
    <Routes>
    <Route exaxt path='login' element={<Login />}/>
    <Route exact path="/*" element={<Home />} />
  </Routes>
  );
}

export default App;

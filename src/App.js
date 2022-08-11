import './App.css';
import Login from './component/Form/Login';
import Register from './component/Form/Register';
import Home from './component/Home/Home';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './component/Form/RequireAuth';

function App() {
  return (
    <div className="">
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />

        <Route path='home' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
      </Routes>




    </div>
  );
}

export default App;

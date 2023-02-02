import { Routes, Route } from 'react-router-dom';
import { Login } from '../components/Auth/Login';
import { Registration } from '../components/Auth/Registration';
import { Home } from '../components/Home/Home';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='container'>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/login" element={<Login /> }/>
        <Route path="/register" element={<Registration />}/>
      </Routes>
    </div>
  );
};

export default App;

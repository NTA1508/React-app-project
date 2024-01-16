import Index from './components/index';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Login from './components/login';
import HeaderLogin from './components/HeaderLogin';
import Footerlogin from './components/Footerlogin';
import Register from './components/register';

function App() {
  return (
    <Router>
      <HeaderLogin/>
        <Routes>
            <Route path={'/login'} element={<Login/>}></Route>
            <Route path={'/register'} element={<Register/>}></Route>
        </Routes>
      <Footerlogin/>
    </Router>
  );
}
export default App;

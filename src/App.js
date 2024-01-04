import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Link } from 'react-router-dom';
import Home from './ApiUser_Detail/Home';
import Users from './ApiUser_Detail/Users';
import Userdetail from './ApiUser_Detail/Userdetail';


function App() {
  return (
    <div className="App container pt-4">
      
<Router>
  <ul className='list-group list-group-horizontal'>
    <li className='list-group-item'>
      <Link to={"/home"} className="nav-link p-4 text-danger"><h1>Home</h1></Link>
    </li>
    <li className='list-group-item'>
      <Link to={"/users"} className="nav-link p-4 text-primary"><h1>Users</h1></Link>
    </li>
  </ul>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route exact path='/users' element={<Users />} />
    <Route path='/users/:id' element={<Userdetail />} />
  </Routes>
</Router>
    </div>
  );
}

export default App;

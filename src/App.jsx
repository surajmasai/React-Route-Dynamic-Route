// import logo from './logo.svg';
import './App.css';
import { Home } from "./components/Home";
import { About } from "./components/about";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Product";
import { Users } from "./components/Users";

import { Route, Routes } from 'react-router-dom';
import { UserDetails } from './components/UserDetails';

import { Login } from './components/Login';




function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>

        <Route path="/" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/contactus" element={<Contact />}></Route>

        <Route path="/users" element={<Users />}></Route>

        <Route path="/users/:userid" element={<UserDetails />}></Route>

        <Route path="/users/admin" element={<div>Admin page</div>}></Route>


        <Route path="/product/:id" element={<Products />}></Route>

        <Route path="*" element={<div>404 page not found</div>}></Route>

         <Route path="/login" element={<Login />}></Route>
        

      </Routes>
  

    </div>
  );
}

export default App;

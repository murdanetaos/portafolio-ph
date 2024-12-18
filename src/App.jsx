import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Routes/Home';
import About from './component/Routes/About';
import Gallery from './component/Routes/Gallery';
import Contact from './component/Routes/Contact';
import NavBar from './component/SharedComponents/Navbar'
function App() {
    return (
      <Router>
        <header>
         <NavBar/>
        </header>
        <main>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Gallery' element={<Gallery/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </main>
      </Router>
    );
}

export default App;
import { useState } from 'react';
import './App.css';
import NavBar from './navigation/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ScrollTop from './components/ScrollTop';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Quote from './pages/Quote';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  // Define routes where the NavBar should be visible
  const validRoutes = ['/', '/about', '/portfolio', '/request-a-quote'];

  // Check if the current location matches a valid route
  const showNavBar = validRoutes.includes(location.pathname);

  return (
    <>
      <div className="App">
        {/* Show NavBar only if the current route matches valid routes */}
        {showNavBar && <NavBar />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/request-a-quote" element={<Quote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {showNavBar && <ScrollTop />}
      </div>
    </>
  );
}

export default App;

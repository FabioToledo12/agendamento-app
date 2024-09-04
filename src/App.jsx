import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import GlobalStyles from './styles/GlobalStyles';
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <GlobalStyles/>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/booking" element={<Booking/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Booking from './pages/Booking';
import Home from './pages/Home';
import Login from "./pages/Login";
import Paying from "./pages/Paying";
import Services from './pages/Services';
import GlobalStyles from './styles/GlobalStyles';

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
                    <Route path="/paying" element={<Paying/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
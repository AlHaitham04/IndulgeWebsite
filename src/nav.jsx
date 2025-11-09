import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Shop from './Shop/Shop.jsx';
import Home from './Home/Home.jsx';
import Basket from './Basket/Basket.jsx';
import Checkout from './Checkout/Checkout.jsx';

function Nav() {
    const [basket, setBasket] = useState([]);

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Shop" element={<Shop basket={basket} setBasket={setBasket} />} />
                    <Route path="/Basket" element={<Basket basket={basket} setBasket={setBasket} />} />
                    <Route path="/Checkout" element={<Checkout basket={basket} setBasket={setBasket} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Nav;

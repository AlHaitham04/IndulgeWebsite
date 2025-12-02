import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Basket.css";

function Basket({ basket, setBasket }) {
    const [localBasket, setLocalBasket] = useState([]);

    useEffect(() => {
        setLocalBasket(basket);
    }, [basket]);

    const handleRemove = (index) => {
        const updated = [...localBasket];
        updated.splice(index, 1);
        setLocalBasket(updated);
        setBasket(updated);
        sessionStorage.setItem("basket", JSON.stringify(updated));
    };

    const totalPrice = localBasket.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="BasketPage">
            <h1>Your Basket</h1>
            <div className="top-controls">
                <div className="control-buttons top-row">
                    <Link to="/Shop" className="btn-control"><FaArrowLeft /> Back to Shop</Link>
                </div>
            </div>

            {localBasket.length === 0 ? (
                <p className="empty-basket">Your basket is currently empty.</p>
            ) : (
                <div className="BasketItems">
                    {localBasket.map((item, index) => (
                        <div className="BasketItem" key={index}>
                            <div className="BasketImage"><img src={item.images[0]} alt={item.name} /></div>
                            <div className="BasketInfo">
                                <p className="BasketName"><strong>{item.name}</strong></p>
                                {item.size && <p>Size: {item.size}</p>}
                                {item.measurements && (
                                    <div className="measurements">
                                        <p>Measurements:</p>
                                        <ul>
                                            {Object.entries(item.measurements).map(([key, value]) => (
                                                <li key={key}>{key}: {value} cm</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: {item.price * item.quantity} OMR</p>
                            </div>
                            <button className="removeButton" onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    ))}
                    <div className="BasketTotal"><h2>Total: {totalPrice} OMR</h2></div>
                    <div>
                        <Link to="/Checkout" className="continue-btn">Proceed to Checkout</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Basket;

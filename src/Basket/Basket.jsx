import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Basket.css";

function Basket() {
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const storedBasket = sessionStorage.getItem("basket");
        if (storedBasket) setBasket(JSON.parse(storedBasket));
    }, []);

    const handleRemove = (index) => {
        const updated = basket.filter((_, i) => i !== index);
        setBasket(updated);
        sessionStorage.setItem("basket", JSON.stringify(updated));
    };

    const totalPrice = basket.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="BasketPage">
            <h1>Your Basket</h1>

            <div className="top-controls">
                <div className="control-buttons top-row">
                    <Link to="/Shop" className="btn-control">
                        <FaArrowLeft /> Back to Shop
                    </Link>
                </div>
            </div>

            {basket.length === 0 ? (
                <p className="empty-basket">Your basket is currently empty.</p>
            ) : (
                <div className="BasketItems">
                    {basket.map((item, index) => (
                        <div className="BasketItem" key={index}>
                            <div className="BasketImage">
                                <img src={item.images[0]} alt={item.name} />
                            </div>
                            <div className="BasketInfo">
                                <p className="BasketName"><strong>{item.name}</strong></p>
                                <p>Size: {item.size}</p>
                                <p>Price: {item.price} OMR</p>
                            </div>
                            <button
                                className="removeButton"
                                onClick={() => handleRemove(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="BasketTotal">
                        <h2>Total: {totalPrice} OMR</h2>
                    </div>

                    <div>

                        <Link to="/Checkout" className="continue-btn">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Basket;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Checkout.css";

function Checkout({ basket, setBasket }) {
    const navigate = useNavigate();

    const [customerName, setCustomerName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");

    const deliveryFee = 2;

    useEffect(() => {
        if (!basket || basket.length === 0) {
            navigate("/Shop");
        }
    }, [basket, navigate]);

    const handleCheckout = async () => {
        if (!address || !phoneNumber || !customerName || !customerEmail) {
            alert("Please fill in all required fields (Name, Address, Phone, Email).");
            return;
        }

        const orderItemsText = basket
            .map((item) => {
                let details = `Product: ${item.name}\n`;
                if (item.measurements) {
                    details += "Measurements:\n";
                    Object.entries(item.measurements).forEach(
                        ([key, value]) => (details += `  ${key}: ${value} cm\n`)
                    );
                } else if (item.size) {
                    details += `Size: ${item.size}\n`;
                }
                details += `Quantity: ${item.quantity || 1}\n`;
                details += `Price: ${item.price} OMR`;
                return details;
            })
            .join("\n\n");

        const totalPrice =
            basket.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0) +
            deliveryFee;

        const templateParams = {
            customer_name: customerName,
            customer_number: "+968" + phoneNumber,
            customer_email: customerEmail,
            order_details: orderItemsText,
            total_price: totalPrice,
            customer_address: address,
        };

        try {
            await emailjs.send(
                "service_ynaxbfr",
                "template_a9pbrfr",
                templateParams,
                "IPbTiy7dPKUyzgedi"
            );

            await emailjs.send(
                "service_u7h3yne",
                "template_x1a1p7m",
                templateParams,
                "bf-LTbc6lDpNFE5B_"
            );

            alert("Order placed! A copy has been sent to the customer's email.");
            setBasket([]);
            navigate("/");
        } catch (err) {
            alert("Order placed, but email sending failed.");
        }
    };

    const subtotal = basket.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );
    const totalPrice = subtotal + deliveryFee;

    return (
        <div className="CheckoutPage">
            <h1>Checkout</h1>

            <div className="CheckoutPage-section">
                <h2>Order summary</h2>
                {basket.map((item, idx) => (
                    <div key={idx} className="CheckoutPage-order-item">
                        {item.images && item.images[0] && (
                            <img src={item.images[0]} alt={item.name} />
                        )}
                        <div className="CheckoutPage-item-details">
                            <strong>{item.name}</strong>
                            {item.measurements && (
                                <ul className="CheckoutPage-measurements">
                                    {Object.entries(item.measurements).map(
                                        ([key, value]) => (
                                            <li key={key}>
                                                {key}: {value} cm
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                            {item.size && <p>Size: {item.size}</p>}
                            <p>Quantity: {item.quantity || 1}</p>
                            <p>Price: {item.price * (item.quantity || 1)} OMR</p>
                        </div>
                    </div>
                ))}
                <p>Subtotal: {subtotal} OMR</p>
                <p>Delivery Fee: {deliveryFee} OMR</p>
                <p>
                    <strong>Total: {totalPrice} OMR</strong>
                </p>
            </div>

            <div className="CheckoutPage-section">
                <h2>Delivery info</h2>

                <label className="CheckoutPage-label">
                    Name:
                    <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Your full name"
                        className="CheckoutPage-input"
                    />
                </label>

                <label className="CheckoutPage-label">
                    Phone Number:
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) =>
                            setPhoneNumber(
                                e.target.value.replace(/\D/g, "").slice(0, 8)
                            )
                        }
                        placeholder="9XXXXXXX"
                        className="CheckoutPage-input"
                    />
                </label>

                <label className="CheckoutPage-label">
                    Email:
                    <input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="example@gmail.com"
                        className="CheckoutPage-input"
                    />
                </label>

                <label className="CheckoutPage-label">
                    Address:
                    <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your full delivery address"
                        className="CheckoutPage-textarea"
                    />
                </label>
            </div>

            <div className="CheckoutPage-section">
                <button
                    className="CheckoutPage-checkoutBtn"
                    onClick={handleCheckout}
                >
                    Place Order
                </button>
            </div>

            <Link to="/Shop" className="CheckoutPage-btn">
                Back to Shop
            </Link>
        </div>
    );
}

export default Checkout;

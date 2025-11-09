import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout({ basket, setBasket }) {
    const navigate = useNavigate();

    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [codeSent, setCodeSent] = useState(false);
    const [enteredCode, setEnteredCode] = useState("");
    const [verified, setVerified] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");

    const deliveryFee = 2;

    useEffect(() => {
        if (!basket || basket.length === 0) {
            navigate("/Shop");
        }
    }, [basket, navigate]);

    const sendCode = () => {
        const code = String(Math.floor(100000 + Math.random() * 900000));
        setVerificationCode(code);
        setCodeSent(true);
        alert(`Verification code sent via WhatsApp to +968${phoneNumber}: ${code}`);
    };

    const verifyCode = () => {
        if (enteredCode === verificationCode) {
            setVerified(true);
            alert("Phone verified!");
        } else {
            alert("Incorrect code, please try again.");
        }
    };

    const handleCheckout = () => {
        if (!verified) {
            alert("Please verify your phone before checkout.");
            return;
        }
        if (!address || !phoneNumber) {
            alert("Please fill in address and phone number.");
            return;
        }

        const orderData = {
            phone: "+968" + phoneNumber,
            address,
            deliveryFee,
            items: basket.map(item => ({ name: item.name, size: item.size, price: item.price })),
            total: basket.reduce((sum, item) => sum + item.price, 0) + deliveryFee
        };

        alert("Order placed! We will contact you via WhatsApp shortly.");
        setBasket([]);
        navigate("/");
    };

    const subtotal = basket.reduce((sum, item) => sum + item.price, 0);
    const totalPrice = subtotal + deliveryFee;

    return (
        <div className="CheckoutPage">
            <h1>Checkout</h1>

            <div className="CheckoutPage-section">
                <h2>Order summary</h2>
                <ul className="CheckoutPage-order-list">
                    {basket.map((item, idx) => (
                        <li key={idx}>
                            {item.name} — Size: {item.size} — {item.price} OMR
                        </li>
                    ))}
                </ul>
                <p>Subtotal: {subtotal} OMR</p>
                <p>Delivery Fee: {deliveryFee} OMR</p>
                <p><strong>Total: {totalPrice} OMR</strong></p>
            </div>

            <div className="CheckoutPage-section">
                <h2>Delivery info</h2>
                <div className="CheckoutPage-phone-container">
                    <input
                        type="text"
                        value="+968"
                        readOnly
                        className="CheckoutPage-country-code"
                    />
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={e => {
                            const val = e.target.value.replace(/\D/g, "");
                            setPhoneNumber(val.slice(0, 8));
                        }}
                        placeholder="9XXXXXXX"
                        className="CheckoutPage-phone-number"
                    />
                </div>

                {phoneNumber && !codeSent && (
                    <button className="CheckoutPage-sendCodeBtn" onClick={sendCode}>Send Verification Code</button>
                )}
                {codeSent && !verified && (
                    <div>
                        <label className="CheckoutPage-label">
                            Enter code:
                            <input
                                type="text"
                                value={enteredCode}
                                className="CheckoutPage-input"
                                onChange={e => setEnteredCode(e.target.value)} />
                        </label>
                        <button className="CheckoutPage-verifyBtn" onClick={verifyCode}>Verify Phone</button>
                    </div>
                )}
                <label className="CheckoutPage-label">
                    Address:
                    <textarea
                        className="CheckoutPage-textarea"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        placeholder="Enter your full delivery address" />
                </label>
            </div>

            <div className="CheckoutPage-section">
                <button className="CheckoutPage-checkoutBtn" onClick={handleCheckout}>Place Order via WhatsApp</button>
            </div>

            <Link to="/Shop" className="CheckoutPage-btn">Back to Shop</Link>
        </div>
    );
}

export default Checkout;

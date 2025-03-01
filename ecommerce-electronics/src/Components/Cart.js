import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../Components/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

            {cart.length === 0 ? (
                <div className="text-center text-xl">
                    Your cart is empty 😔
                    <br />
                    <Link to="/products" className="text-blue-500 underline mt-4 inline-block">
                        Browse Products
                    </Link>
                </div>
            ) : (
                <div className="bg-white shadow-md p-4 rounded-lg">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b py-4">
                            {/* Product Image */}
                            <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />

                            {/* Product Details */}
                            <div className="flex-1 ml-4">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-gray-600">${item.price}</p>

                                {/* Quantity Controls */}
                                <div className="flex items-center mt-2">
                                    <button 
                                        className="bg-gray-200 px-2 py-1 rounded-lg"
                                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                        disabled={item.quantity <= 1}
                                    >-</button>
                                    <span className="px-4">{item.quantity}</span>
                                    <button 
                                        className="bg-gray-200 px-2 py-1 rounded-lg"
                                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                    >+</button>
                                </div>
                            </div>

                            {/* Remove Button */}
                            <button 
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                onClick={() => dispatch(removeFromCart(item.id))}
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    {/* Total Price and Checkout */}
                    <div className="text-right mt-6">
                        <h3 className="text-2xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
                        <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

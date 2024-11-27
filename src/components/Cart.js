import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handlePurchase = async () => {
    const userId = 1; // Replace with actual user ID
    try {
      const response = await fetch("http://localhost:3001/api/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          items: cartItems,
        }),
      });

      if (response.ok) {
        dispatch(clearCart());
        alert("Achat réussi!");
      }
    } catch (error) {
      console.error("Purchase failed:", error);
      alert("Erreur lors de l'achat");
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.prix, 0);

  return (
    <div className="container mt-4">
      <h2>Panier d'achat</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">{item.nom}</h5>
                    <p className="card-text mb-0">Prix: {item.prix} €</p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.nom}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: {total} €</h4>
            <button className="btn btn-success btn-lg" onClick={handlePurchase}>
              Acheter
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

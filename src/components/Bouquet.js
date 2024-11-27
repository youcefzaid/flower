import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function Bouquet({ bouquet, onLike }) {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    onLike(bouquet.id);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: bouquet.id,
        nom: bouquet.nom,
        prix: bouquet.prix,
        image: bouquet.image,
      })
    );
  };

  return (
    <div className="card">
      <img src={bouquet.image} className="card-img-top" alt={bouquet.nom} />
      <div className="card-body">
        <h5 className="card-title">{bouquet.nom}</h5>
        <p className="card-text">{bouquet.descr}</p>
        <p className="card-text">Prix: {bouquet.prix} €</p>
        <div className="d-flex justify-content-between">
          <button onClick={handleAddToCart} className="btn btn-primary">
            🛒 Ajouter au panier
          </button>
          <button
            onClick={handleLikeClick}
            className={`btn ${
              bouquet.liked ? "btn-danger" : "btn-outline-danger"
            }`}
          >
            {bouquet.liked ? "❤️ Liked" : "🤍 Like"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bouquet;

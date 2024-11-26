import React from "react";

function Bouquet({ bouquet, onLike }) {
  const handleLikeClick = () => {
    onLike(bouquet.id);
  };

  return (
    <div className="card">
      <img src={bouquet.image} className="card-img-top" alt={bouquet.nom} />
      <div className="card-body">
        <h5 className="card-title">{bouquet.nom}</h5>
        <p className="card-text">{bouquet.descr}</p>
        <p className="card-text">Prix: {bouquet.prix} €</p>
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
  );
}

export default Bouquet;

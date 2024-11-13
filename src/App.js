import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bouquets from "./pages/Bouquets";
import Fleurs from "./pages/Fleurs";
import MonCompte from "./pages/MonCompte";

function App() {
  const [bouquets, setBouquets] = useState([
    {
      id: 1,
      nom: "Bouquet de Tunis",
      descr: "Un dosage parfait de jasmins et de tulipes",
      image: "/images/1.jpg",
      prix: 1500.0,
      liked: false,
    },
    {
      id: 2,
      nom: "Bouquet d'Alger",
      descr:
        "Un mélange merveilleux de jasmins et de senteurs méditerranéennes",
      image: "/images/1.jpg",
      prix: 2000.0,
      liked: false,
    },
    {
      id: 3,
      nom: "Bouquet d'Oran",
      descr: "Un mélange merveilleux de roses et de lys",
      image: "/images/1.jpg",
      prix: 2000.0,
      liked: false,
    },
  ]);

  const handleLike = (id) => {
    setBouquets(
      bouquets.map((bouquet) =>
        bouquet.id === id ? { ...bouquet, liked: !bouquet.liked } : bouquet
      )
    );
  };

  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/bouquets"
            element={<Bouquets bouquets={bouquets} onLike={handleLike} />}
          />
          <Route path="/fleurs" element={<Fleurs />} />
          <Route path="/moncompte" element={<MonCompte />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

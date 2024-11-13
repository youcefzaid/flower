import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bouquets from "./pages/Bouquets";
import Fleurs from "./pages/Fleurs";
import MonCompte from "./pages/MonCompte";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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

  const handleLike = async (id) => {
    const updatedBouquets = bouquets.map((bouquet) =>
      bouquet.id === id ? { ...bouquet, liked: !bouquet.liked } : bouquet
    );
    setBouquets(updatedBouquets);

    try {
      const response = await fetch(`http://localhost:3001/api/like?id=${id}`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Erreur lors du like");
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  useEffect(() => {
    const fetchBouquets = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/bouquets");
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("bouquets", JSON.stringify(data));
          setBouquets(data);
        }
      } catch (error) {
        console.error("Erreur:", error);
        const storedBouquets = localStorage.getItem("bouquets");
        if (storedBouquets) {
          setBouquets(JSON.parse(storedBouquets));
        }
      }
    };

    fetchBouquets();
  }, []);

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

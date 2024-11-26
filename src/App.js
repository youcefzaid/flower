import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bouquets from "./pages/Bouquets";
import Fleurs from "./pages/Fleurs";
import MonCompte from "./pages/MonCompte";
import BouquetLoader from "./services/BouquetLoader";

function App() {
  const [bouquets, setBouquets] = useState([]);

  useEffect(() => {
    const storedBouquets = localStorage.getItem("bouquets");
    if (storedBouquets) {
      setBouquets(JSON.parse(storedBouquets));
    }
  }, []);

  const handleLike = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/like?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
      });

      const { bouquet } = await response.json();

      const updatedBouquets = bouquets.map((b) =>
        b.id === bouquet.id ? bouquet : b
      );
      setBouquets(updatedBouquets);
      localStorage.setItem("bouquets", JSON.stringify(updatedBouquets));
    } catch (error) {
      console.error("Error updating like:", error);
    }
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
      <BouquetLoader setBouquets={setBouquets} />
    </Router>
  );
}

export default App;

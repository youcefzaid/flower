import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bouquets from "./pages/Bouquets";
import Fleurs from "./pages/Fleurs";
import MonCompte from "./pages/MonCompte";

function App() {
  const [bouquets, setBouquets] = useState([]);

  const fetchBouquets = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/bouquets");
      const data = await response.json();
      localStorage.setItem("boquet", JSON.stringify(data));
      setBouquets(data);
    } catch (error) {
      console.error("Error fetching bouquets:", error);
    }
  };

  useEffect(() => {
    fetchBouquets();
  }, []);

  const handleLike = async (id) => {
    try {
      await fetch(`http://localhost:3001/api/like?id=${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
      });

      await fetchBouquets();
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
    </Router>
  );
}

export default App;

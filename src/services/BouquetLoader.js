import { useEffect } from "react";

function BouquetLoader({ setBouquets }) {
  useEffect(() => {
    const fetchBouquets = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/bouquets");
        const bouquets = await response.json();
        localStorage.setItem("bouquets", JSON.stringify(bouquets));
        setBouquets(bouquets);
      } catch (error) {
        console.error("Erreur lors du chargement des bouquets:", error);
      }
    };

    fetchBouquets();
  }, [setBouquets]);

  return null;
}

export default BouquetLoader;

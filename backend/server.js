const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const bouquets = [
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
    descr: "Un mélange merveilleux de jasmins et de senteurs méditerranéennes",
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
];

const purchases = [];

app.get("/api/bouquets", (req, res) => {
  res.json(bouquets);
});

app.patch("/api/like", (req, res) => {
  const { id } = req.query;
  const bouquet = bouquets.find((b) => b.id === parseInt(id));

  if (!bouquet) {
    return res.status(404).json({ message: "Bouquet non trouvé" });
  }

  bouquet.liked = !bouquet.liked;
  res.json({ success: true, bouquet });
});

app.post("/api/purchase", (req, res) => {
  const { userId, items } = req.body;

  if (!userId || !items || !Array.isArray(items)) {
    return res.status(400).json({ message: "Invalid request data" });
  }

  const purchase = {
    id: purchases.length + 1,
    userId,
    items,
    totalAmount: items.reduce((sum, item) => sum + item.prix, 0),
    date: new Date(),
  };

  purchases.push(purchase);
  res.status(201).json({ success: true, purchase });
});

app.get("/api/purchases/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const userPurchases = purchases.filter((p) => p.userId === userId);
  res.json(userPurchases);
});

app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});

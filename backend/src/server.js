import express from "express";
import { garderie, services, activites } from "./data.js";

const app = express();
app.disable("x-powered-by");
app.set("json spaces", 2);

// Journal : méthode, URL et code de réponse
app.use((req, res, next) => {
  res.on("finish", () => console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`));
  next();
});

app.get("/api/garderie", (req, res) => res.json(garderie));
app.get("/api/services", (req, res) => res.json(services));
app.get("/api/activites", (req, res) => res.json(activites));

app.use((req, res) => res.status(404).json({ erreur: "Route introuvable" }));

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, "0.0.0.0", () => console.log(`API Ma Garderie sur le port ${PORT}`));

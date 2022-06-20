const express = require("express");
const ProductRouter = express.Router();
const produit = require("../model/product_schema");
require("dotenv").config();

//get all product
ProductRouter.get("/", async function (req, res) {
  const result = await produit.find();
  try {
    res.send(result);
  } catch (error) {}
});
//filtrer les produits par category
ProductRouter.get("/", async function (req, res) {
  const result = await produit.find({ category: req.body.category });
  try {
    res.send(result);
  } catch (error) {}
});

//filtrer les produits par tissue
ProductRouter.get("/", async function (req, res) {
  const result = await produit.find({ Materiaux: req.body.Materiaux });
  try {
    res.send(result);
  } catch (error) {}
});

//add new product
ProductRouter.post("/", async function (req, res) {
  const prod = await new produit({
    nom: req.body.nom,
    qte: req.body.qte,
    prix: req.body.prix,
    Materiaux: req.body.Materiaux,
    famille: req.body.famille,
    category: req.body.category, //on'a creer une instance selon le schema
  });
  const result = await prod.save(); //on save dans le data base
  try {
    res.send(result);
  } catch (error) {}
});

//updte info about product
ProductRouter.put("/", async (req, res) => {
  const result = await produit.findOneAndUpdate(
    { nom: req.body.nom },
    { prix: req.body.prix },
    { new: true }
  );
  try {
    res.send(result);
  } catch (error) {}
});
//  delite par  nom
ProductRouter.delete("/", async (req, res) => {
  const result = await produit.findOneAndDelete({
    category: req.body.category,
  });
  try {
    res.send(result);
  } catch (error) {}
});
module.exports = ProductRouter;

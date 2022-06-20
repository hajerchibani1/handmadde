const express = require("express");
const SellerRouter = express.Router();
const seller = require("../model/seller_schema");
require("dotenv").config();

//get all seller
SellerRouter.get("/", async function (req, res) {
  const result = await seller.find();
  try {
    res.send(result);
  } catch (error) {}
});
//add new seller
SellerRouter.post("/", async function (req, res) {
  const pers = await new seller({
    name: req.body.name,
    prenom: req.body.prenom,
    adress_email: req.body.adress_email,
    password: req.body.password,
    tel: req.body.tel, //on'a creer une instance selon le schema
  });
  const result = await pers.save(); //on save dans le data base
  try {
    res.send(result);
  } catch (error) {}
});
//updte info about user
SellerRouter.put("/:id", async (req, res) => {
  const result = await seller.findByIdAndUpdate(
    { _id: req.params.id },
    { adress_email: req.body.adress_email },
    { new: true }
  );
  try {
    res.send(result);
  } catch (error) {}
});
// delete par id
SellerRouter.delete("/:id", async (req, res) => {
  const result = await seller.findOneAndDelete({ _id: req.params.id });
  try {
    res.send(result);
  } catch (error) {}
});
module.exports = SellerRouter;

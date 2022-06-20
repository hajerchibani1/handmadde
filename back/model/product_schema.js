const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = schema({
  nom: String,
  qte: Number,
  prix: Number,
  category: String,
  //**** bags *****/
  Materiaux: String,
  //**** accessory ****/
  famille: String,
});
const produit = mongoose.model("product_schema", productSchema);

module.exports = produit;

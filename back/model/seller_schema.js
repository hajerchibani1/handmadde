const mongoose = require("mongoose");
const schema = mongoose.Schema;

const sellerSchema = schema({
  name: String,
  prenom: String,
  adress_email: String,
  password: String,
  tel: String,
});
const seller = mongoose.model("seller_schema", sellerSchema);

module.exports = seller;

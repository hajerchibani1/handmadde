const mongoose = require("mongoose");
const schema = mongoose.Schema;

const clientSchema = schema({
  name: { type: String, required: true },
  prenom: { type: String, required: true },
  adress_email: { type: String, required: true },
  password: { type: String, required: true },
  tel: { type: String, required: true },
});
const client = mongoose.model("client_schema", clientSchema);

module.exports = client;

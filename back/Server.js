const express = require("express");
const dbconnect = require("./dbconnect");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); //pour lire les types json que j'envoyer vers body

app.use("/client", require("./Routes/Client"));
app.use("/seller", require("./Routes/Seller"));
app.use("/product", require("./Routes/Product"));
dbconnect();

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server running ${PORT}`);
});

const express = require("express");
const bcrypt = require("bcrypt");
const ClientRouter = express.Router();
const jwt = require("jsonwebtoken");

const client = require("../model/Client_schema");
require("dotenv").config();

//get all clients
ClientRouter.get("/", async function (req, res) {
  const result = await client.find();
  try {
    res.send(result);
  } catch (error) {}
});
//  register
ClientRouter.post("/register", async (req, res) => {
  try {
    const pers = new client({
      name: req.body.name,
      prenom: req.body.prenom,
      adress_email: req.body.adress_email,
      password: req.body.password,
      tel: req.body.tel, //on'a creer une instance selon le schema
    });

    //check if the email exist
    const SearchUser = await client.findOne({
      adress_email: req.body.adress_email,
    });
    console.log(SearchUser);
    if (SearchUser) {
      return res.status(400).send({ msg: "email already exist" });
    }
    //hash password
    const Salt = 10;
    const genSalt = await bcrypt.genSalt(Salt);
    const hashedPassword = await bcrypt.hash(req.body.password, genSalt);
    console.log(hashedPassword);
    pers.password = hashedPassword;

    const result = await pers.save(); //on save dans le data base
    console.log(result._id.toString());
    const payload = { _id: result._id.toString(), name: result.name };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    console.log(token);

    // save the user
    res
      .status(200)
      .send({ result, msg: "user is saved", token: `Bearer ${token}` });
  } catch (error) {
    console.log(error);
    res.status(500).send("can not save the client");
  }
});

//login
ClientRouter.post("/login", async (req, res) => {
  const { adress_email, password } = req.body;
  try {
    //find if the user exist
    const searchedUser = await client.findOne({ adress_email });
    //if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "User not exist" });
    }
    //password are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "wrong password" });
    }
    const payload = {
      _id: searchedUser._id.toString(),
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    //send the user
    res.status(200).send({
      user: searchedUser,
      msg: "user is saved",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send("can not save the user");
  }
});

//updte info about client
ClientRouter.put("/:id", async (req, res) => {
  const result = await client.findByIdAndUpdate(
    { _id: req.params.id },
    { adress_email: req.body.adress_email },
    { new: true }
  );
  try {
    res.send(result);
  } catch (error) {}
});
// delete par id
ClientRouter.delete("/:id", async (req, res) => {
  const result = await client.findOneAndDelete({ _id: req.params.id });
  try {
    res.send(result);
  } catch (error) {}
});
module.exports = ClientRouter;

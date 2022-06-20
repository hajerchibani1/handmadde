const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("name", "name is required").notEmpty(),
  check("prenom", "lastName is required").notEmpty(),
  check("adress_email", "email is required").notEmpty(),
  check("adress_email", "check email again").isEmail(),
  check("password", "passord is required ").isLength({
    min: 6,
    max: 20,
  }),
];

exports.loginRules = () => [
  check("adress_email", "email is required").notEmpty(),
  check("adress_email", "check email again").isEmail(),
  check("password", "password must be between 6 and 20 character").isLength({
    min: 6,
    max: 20,
  }),
];

exports.validation = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(400)
      .send({ errors: error.array().map((el) => ({ msg: el.msg })) });
  }
  next();
};

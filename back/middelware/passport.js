const passport = require("passport");
const client = require("../model/Client_schema");
require("dotenv").config();

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SecretOrKey,
};
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const User = await user.findOne({ _id: jwt_payload._id });
      console.log(User);
      User ? done(null, User) : done(null, false);
    } catch (error) {
      console.log("error");
    }
  })
);
module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });

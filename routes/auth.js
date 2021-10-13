const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv/config");

router.post("/register", async (req, res) => {
  const { username, email, password, password2 } = req.body;
  const error = null;
  // Sanitaize Data
  // const {error}= regiterValidate(req.body)
  if (error) return res.json({ error: error.message });
  else {
    // check if user already registered

    User.findOne({ email: email })
      .then(async (user) => {
        if (user) return res.json({ error: "email already registered" });
        else {
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await (
            await bcrypt.hash(password, salt)
          ).toString();
          const newUser = new User({
            username: username,
            email: email,
            password: hashPassword,
          });
          try {
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
          } catch (err) {
            res.status(500).json(err);
          }
        }
        // res.redirect("/users/login");
      })
      .catch((err) => console.log(err));
  }
});

router.post("/login", async (req, res) => {
  //validate Data
  //   const { error } = loginValidation(req.body);
  //   if (error) return res.status(400).send(error.detail[0].message);

  //console.log(password);
  try {
    const user = await User.findOne({ username: req.body.username });
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass)
      return res.status(401).json({
        message: "Incorrect email or password",
      });
    // sign token after making sure password is correct
    const token = jwt.sign(
      { _id: user._id, isAdmin: user.isAdmin },
      process.env.TOKEN_SECRET,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res.header("auth-token", token);

    res.status(200).json({ response: "success", ...others });
  } catch (err) {
    res.status(401).json({ message: "Incorrect email or password" });
  }
});

module.exports = router;

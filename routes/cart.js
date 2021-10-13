const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./tokenValidator");
const Cart = require("../Models/Cart");

// CREATE A NEW Cart
router.post("/", verifyToken, async (req, res) => {
  /** TO IMPLEMENT  */
  // we have to sanitize the data
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Update Cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const UpdatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(UpdatedCart);
  } catch (err) {
    res.status(500).json({ err });
  }
});
// DELETE Cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart is deleted");
  } catch (err) {
    res.status(500).json({ err });
  }
});

//FIND User Cart
router.get("/find/:userid", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const Cart = await Cart.findOne({ userId: req.params.userid });
    res.status(200).json(Cart);
  } catch (err) {
    res.status(500).json({ err });
  }
});

//GET all
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;

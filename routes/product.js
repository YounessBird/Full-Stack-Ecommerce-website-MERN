const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./tokenValidator");
const Product = require("../Models/Products");

// CREATE A NEW
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  /** TO IMPLEMENT  */
  // we have to sanitize the data
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Update Product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const UpdatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(UpdatedProduct);
  } catch (err) {
    res.status(500).json({ err });
  }
});
// DELETE PRODUCT
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product is deleted");
  } catch (err) {
    res.status(500).json({ err });
  }
});

//FIND PRODUCT BY ID
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ err });
  }
});
//GET all PRODUCTS OR NEW USERS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    let products;
    qNew
      ? (products = await Product.find().sort({ _id: -1 }).limit(1))
      : qCategory
      ? (products = await Product.find({ categories: { $in: [qCategory] } }))
      : (products = await Product.find());
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;

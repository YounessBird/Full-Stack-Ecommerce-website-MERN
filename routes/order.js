const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./tokenValidator");
const Order = require("../Models/Order");

// CREATE A NEW Order
router.post("/", verifyToken, async (req, res) => {
  /** TO IMPLEMENT  */
  // we have to sanitize the data
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Update Order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const UpdatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(UpdatedOrder);
  } catch (err) {
    res.status(500).json({ err });
  }
});
// DELETE Order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order is deleted");
  } catch (err) {
    res.status(500).json({ err });
  }
});

//FIND User Order
router.get("/find/:userid", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.findOne({ userId: req.params.userid });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ err });
  }
});

//GET all
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ err });
  }
});

//Order STATS Monthly INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));

  try {
    const monthlyIncome = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);

    res.status(200).json(monthlyIncome);
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

//body parse Middleware
app.use(cors());
app.use(express.json());

app.use("/api/users/", require("./routes/users"));
app.use("/api/auth/", require("./routes/auth"));
app.use("/api/order/", require("./routes/order"));
app.use("/api/product/", require("./routes/product"));
app.use("/api/cart/", require("./routes/cart"));
app.use("/api/checkout", require("./routes/stripe"));

//Database Connection
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("connected database"))
  .catch((err) => console.log("err", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server starting", PORT));

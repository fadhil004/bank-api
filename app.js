const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
const transactionRoutes = require("./routes/transaction");
const authenticate = require("./middleware/auth");

app.use(express.json());

// Public Routes
app.use("/api/auth", authRoutes);
app.use("/api/transaction", authenticate, transactionRoutes);

// Protected Route (Contoh akses data privat)
app.get("/api/me", authenticate, (req, res) => {
  res.json({ message: "Ini data rahasia", userId: req.user.id });
});

app.listen(3000, () => console.log("Server running on port 3000"));

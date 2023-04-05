const express = require("express");
const Calculaterouter = express.Router();

Calculaterouter.post("/", async (req, res) => {
  const { amount, Interest, Years } = req.body;
  const Total_Maturity_Value = amount* ((((1 + 0.071) ** 15) - 1) / 0.071)
  ;//100000  1.071
// Total Maturity Value(F) = P [({(1+i) ^n}-1)/i]
// Total Maturity Value(F) = 1,00,000[({(1 + 0.071) ^ 15}-1)/0.071]
// Total Maturity Value(F) = 25,32,343 
  const Total_Investment_Amount = amount * Years;

  const Total_Interest_Gained = Total_Maturity_Value - Total_Investment_Amount;
  try {
    res.send({
      msg: "hello",
      Total_Maturity_Value: Total_Maturity_Value,
      Total_Investment_Amount: Total_Investment_Amount,
      Total_Interest_Gained: Total_Interest_Gained,
    });
  } catch (error) {
    res.send({ msg: "some thing went wrong" });
  }
});

module.exports = Calculaterouter;

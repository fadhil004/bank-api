const { Account, sequelize } = require("../models");

exports.transfer = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { toAccountNumber, amount } = req.body;
    const fromUserId = req.user.id;

    const sender = await Account.findOne(
      { where: { userId: fromUserId } },
      { transaction: t },
    );
    const receiver = await Account.findOne(
      { where: { accountNumber: toAccountNumber } },
      { transaction: t },
    );

    if (!receiver) throw new Error("Account destination not found");
    if (sender.balance < amount) throw new Error("Insufficient balance");

    await sender.update(
      { balance: sender.balance - amount },
      { transaction: t },
    );

    await receiver.update(
      { balance: Number(receiver.balance) + Number(amount) },
      { transaction: t },
    );

    await t.commit();

    res.status(200).json({ message: "Transfer successful" });
  } catch (error) {
    await t.rollback();
    res.status(400).json({ error: error.message });
  }
};

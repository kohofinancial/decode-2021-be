const { getTransactionByID, createTransaction } = require('../db/transaction');

const GET = (req, res) => {
  // handles GET /api/transactions
  let id = req.params.id;
  if(!id)
    return [];

  let transaction = getTransactionByID(id);
  if(transaction)
    res.send(JSON.stringify(transaction));
  res.send({error: "Transaction not found."});
}

const POST = (req, res) => {
  // handles POST /api/transactions
  let b = req.body;

  createTransaction(b.name, b.goalAmount, b.currentAmount, b.users)
    .then((err, transaction) => {
        res.status(200);
        res.send("succeeded");
    })
    .catch(e => {
        res.status(500);
        res.send(e);
    });
}

module.exports = { GET, POST };
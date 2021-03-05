const { getTransactionByID, createTransaction } = require('../db/transaction');
const { addTransaction } = require('../db/user');
const { addTransactionToCampaign } = require('../db/campaigns');


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

  createTransaction(b.userId, b.receiver, b.campaign, b.amount, b.type)
    .then((transaction) => {
      console.log(transaction)
      addTransaction(b.userId, transaction)

      amountRundup=((Math.ceil(b.amount / 10) * 10)-b.amount)
      if (b.type == 'donation') {
        // Add transaction to campaign
        addTransactionToCampaign(b.campaign, transaction)
        
      } else if (amountRundup !== 0) {
        createTransaction(b.userId, b.receiver, b.campaign, amountRundup, "roundup")
        .then((transaction) => {
          console.log(transaction)
          addTransaction(b.userId, transaction)
        })
        .catch(e => {
          res.status(500);
          res.send(e);
        });
      }

      res.status(200);
      res.send("succeeded");
    })
    .catch(e => {
        res.status(500);
        res.send(e);
    });
}

module.exports = { GET, POST };

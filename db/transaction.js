const { User, Campaign, Transaction} = require('./models');

const getTransactionByID = async(id) => {
  let res = await Transaction.find({_id: id});
  if(res.length)
    return res;
  return;
}

const createTransaction = async(sender, reciever, amount, type) => {
  let transaction = new Transaction({ sender, reciever, amount, type });
  return transaction.save();
}

module.exports = {
  getTransactionByID, createTransaction
}
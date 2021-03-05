const { User } = require('./models');

const createUser = async(name, balance, roundUp) => {
  // Create a new user with name and balance
  // Rounds up transactions to the next roundUp, where roundUp is a power of 10
  // Assumes user with name doesn't already exist
  let user = new User({
    name,
    balance,
    roundUp,
    campaigns: [],
    transactions: []
  });
  return user.save();
}

const addTransaction = async(id, transaction) => {
  User.findOne({_id: id}).then((userToUpdate) => {
    console.log(userToUpdate)
    userToUpdate.balance -= transaction.amount;
    userToUpdate.transactions.push(transaction);
    userToUpdate.save();
  });

  // TODO: send the money to the charity!
}

const addCampaign = async(id, campaign) => {
  User.findOne({_id: id}).then((userToUpdate) => {
    console.log("inside user addCampain findOne")
    console.log(userToUpdate)
    userToUpdate.campaigns.push(campaign);
    userToUpdate.save();
  });
}

const getUserByName = async(name) => {
  return User.find({name: name}).populate('transactions').populate('campaigns');
}

const getRoundUpByName = async(name) => {
  let res = await User.find({name: name});
  if(res.length)
    return res;
  return;
}

// need to discuss more about what functions are needed

module.exports = {
  createUser,
  getUserByName,
  addTransaction,
  addCampaign,
}
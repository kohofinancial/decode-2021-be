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
  user.save();
}

const getUserByID = async(name) => {
  let res = await User.find({name: name});
  if(res.length)
    return res;
  return;
}

// need to discuss more about what functions are needed

module.exports = {
  createUser
}
const { User, Transaction} = require('./models');

const createUser = async(name, balance, roundUp) => {
  // Create a new user with name and balance
  // Rounds up transactions to the next roundUp, where roundUp is a power of 10
  // Assumes user with name doesn't already exist
  let user = new User({
    name,
    balance,
    roundUp,
    transactions: []
  });
  return User.findOne({name: name}).populate("transactions").then((userToUpdate) => {
    if (!userToUpdate){
      return user.save();
    }else{
      return userToUpdate
    }
  });
}

const addTransaction = async(id, transaction) => {
  
  User.findOne({_id: id}).then((userToUpdate) => {
    
    switch (transaction.type) {
      case 'purchase':
        userToUpdate.balance -= transaction.amount;
        break;

      case 'donation':
        userToUpdate.roundUp -= transaction.amount;
        break;

      case 'roundup':
        userToUpdate.balance -= transaction.amount;
        userToUpdate.roundUp += transaction.amount;
        break;
        
      case 'roundupCashout':
        userToUpdate.balance += userToUpdate.roundUp;
        userToUpdate.roundUp = 0
        
      default:
        // ERROR :::
  
    }
    
    userToUpdate.transactions.push(transaction);
    userToUpdate.save();
  });

  // TODO: send the money to the charity!
}

// const addCampaign = async(id, campaign) => {
//   User.findOne({_id: id}).then((userToUpdate) => {
//     userToUpdate.campaigns.push(campaign);
//     userToUpdate.save();
//   });
// }

const getDonationSum = async(id) => {
  console.log(id)
  return User.findById(id, 'transactions').populate('transactions').then((collection) => {
    let cumulativeSum = 0;    

    collection.transactions.filter(transaction => transaction.type == 'donation').forEach(transaction => cumulativeSum += transaction.amount);

    return cumulativeSum;
  })
}


const getTransactionsByType = async(id, _type) => {
  User.findById(id, 'transactions').where({ type: _type });
}

const getUserById = async(userId) => {
  return User.findById(userId).populate('transactions').populate('campaigns');
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
  getUserById,
  addTransaction,
  // addCampaign,
  getTransactionsByType,
  getDonationSum,
}
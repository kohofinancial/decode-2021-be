//mongoose models go here
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  balance: Number,
  roundUp: Number,
  campaigns: [{ type: Schema.Types.ObjectId, ref: 'Campaign' }],
  transaction: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]
});
const User = new mongoose.model('User', UserSchema);

const CampaignSchema = new mongoose.Schema({
  name: String,
  goalAmount: Number,
  currentAmount: Number,
  users: [{type: Schema.Types.ObjectId, ref: 'User'}]
});
const Campaign = new mongoose.model('Campaign', CampaignSchema);

const TransactionSchema = new mongoose.Schema({
  receiver: String,
  sender: {type: Schema.Types.ObjectId, ref: 'User'},
  amount: Number,
  type: {
    type: String,
    enum: ['purchase', 'donation', 'roudup']
  }
});
const Transaction = new mongoose.model('Transaction', TransactionSchema);

module.exports = { User, Campaign, Transaction};
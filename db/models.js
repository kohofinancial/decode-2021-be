//mongoose models go here
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  balance: Number,
  campaigns: [{ type: Schema.Types.ObjectId, ref: 'Campaign' }],
  roundUp: Number,
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
  type: String
});
const Transaction = new mongoose.model('Transaction', CampaignSchema);

module.exports = { User, Campaign, Transactions};
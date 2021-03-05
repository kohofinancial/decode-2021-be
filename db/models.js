//mongoose models go here
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  balance: Number,
  roundUp: Number,
  totalDonated: Number,
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]

});
UserSchema.index({name:1})
const User = new mongoose.model('User', UserSchema);

const CampaignSchema = new mongoose.Schema({
  name: String,
  goalAmount: Number,
  currentAmount: Number,
  userIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]
});
const Campaign = new mongoose.model('Campaign', CampaignSchema);

const TransactionSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  receiver: String,
  campaign: { type: Schema.Types.ObjectId, ref: 'Campaign', required: false },
  amount: Number,
  type: {
    type: String,
    enum: ['purchase', 'donation', 'roundup', 'roundupCashout']
  }
});
const Transaction = new mongoose.model('Transaction', TransactionSchema);

module.exports = { User, Campaign, Transaction};
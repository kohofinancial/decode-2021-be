const { Campaign, User } = require('./models');

const getAllCampaigns = async() => {

}

const getCampaignByID = async(id) => {
  return Campaign.findById(id);
}

const getCampaignByUserID = async(id) => {
  return Campaign.find({ userIds: id }).populate("transactions");
}

const createCampaign = async(name, goalAmount, userId) => {
  // Creates a new campaign
  // returns true if successful
  let campaign = new Campaign({
    name,
    goalAmount,
    currentAmount: 0,
    userIds: [userId],
    transactions: [],
  });
  return campaign.save();
}

const addTransactionToCampaign = async(id, transaction) => {
  console.log("id_:"+id)
  console.log("transaction_:" + transaction)
  Campaign.findOne({_id: id}).populate("transactions").then((campaignToUpdate) => {
    campaignToUpdate.currentAmount += transaction.amount;
    campaignToUpdate.transactions.push(transaction);
    campaignToUpdate.save();
  });
}

const deleteCampaignById = async(campaignId) => {
  console.log("YMA"+campaignId)
  return Campaign.findOneAndDelete({_id: campaignId})
}
module.exports = {
  getAllCampaigns,
  getCampaignByUserID,
  getCampaignByID,
  createCampaign,
  addTransactionToCampaign,
  deleteCampaignById,
}


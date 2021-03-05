const { Campaign, User } = require('./models');

const getAllCampaigns = async() => {

}

const getCampaignByID = async(id) => {
  let res = await Campaign.find({_id: id});
  if(res.length)
    return res;
  return;
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

module.exports = {
  getAllCampaigns, getCampaignByID, createCampaign
}


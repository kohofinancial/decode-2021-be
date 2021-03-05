const { Campaign } = require('./models');

const getAllCampaigns = async() => {

}

const getCampaignByID = async(id) => {
  let res = await Campaign.find({_id: id});
  if(res.length)
    return res;
  return;
}

const createCampaign = async(name, goalAmount, currentAmount, users) => {
  // Creates a new campaign
  let campaign = new Campaign({
    name,
    goalAmount,
    currentAmount,
    users
  });
  campaign.save();
}

module.exports = {
  getAllCampaigns, getCampaignByID, createCampaign
}


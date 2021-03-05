const { Campaign, User } = require('./models');

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
  // returns true if successful
  let campaign = new Campaign({
    name,
    goalAmount,
    currentAmount,
    users
  });

  return campaign.save((e) => {
    users.map((name) => {
      User.findOneAndUpdate({name}, { $push : {campaigns : campaign}});
    });
  });
}

module.exports = {
  getAllCampaigns, getCampaignByID, createCampaign
}


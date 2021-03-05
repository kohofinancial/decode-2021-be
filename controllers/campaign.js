const { getCampaignByID, createCampaign } = require('../db/campaigns');

const GET = (req, res) => {
  // handles GET /api/campaigns
  // gets a campaign
  let id = req.params.id;
  if(!id)
    return [];

  let campaign = getCampaignByID(id);
  if(campaign)
    res.send(JSON.stringify(campaign));
  res.send({error: "Campaign not found."});
}

const POST = (req, res) => {
  // handles POST /api/campaigns
  // creates a new campaign
  let { name, goalAmount, currentAmount, users } = req.body;
  
}

module.exports = { GET, POST };

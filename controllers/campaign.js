const { getCampaignByID, createCampaign } = require('../db/campaigns');
const { addCampaign } = require('../db/user');

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
  createCampaign(req.body.name, req.body.goalAmount, req.body.userId)
  .then((campaign) => {
      console.log(campaign)
      addCampaign(req.body.userId, campaign)
      res.status(200);
      res.send("succeeded");
  })
  .catch(e => {
      res.status(500);
      res.send(e);
  });

}

module.exports = { GET, POST };

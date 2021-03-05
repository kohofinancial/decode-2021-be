const { getUserById, createUser, getDonationSum } = require('../db/user.js')
const { getCampaignByUserID } = require('../db/campaigns.js')

const GET = (req, res) => {
    let userId = req.params.userId;
    if (userId)
    {
        getUserById(userId).then((user) => {
            res.status(200);
            getDonationSum(user._id).then((value) => {
                user.totalDonated=value               
                res.send(user);
            })
            
        })
        .catch(e => {
            res.status(500);
            res.send(e);
        });
    }
}

const POST = (req, res) => {
    createUser(req.body.name, req.body.balance, 0)
    .then((user) => {
        console.log(user)
        res.status(200);
        res.send(user);
    })
    .catch(e => {
        res.status(500);
        res.send(e);
    });
}

const GET_CAMPAIGNS = (req, res) => {
    let userId = req.params.userId;
    if (userId)
    {
        getCampaignByUserID(userId).then((campaigns) => {
            res.status(200);
            res.send(campaigns);            
        })
        .catch(e => {
            res.status(500);
            res.send(e);
        });
    }
}


module.exports = { GET, POST, GET_CAMPAIGNS };
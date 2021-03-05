const { getUserByName, createUser } = require('../db/auth.js')

const GET = (req, res) => {
    let user = req.params.name;
    console.log(user);
    if (user)
    {
        getUserByName(user).then((userInfo) => {
            console.log(userInfo);
            res.status(200);
            res.send(user);
        })
        .catch(e => {
            res.status(500);
            res.send(e);
        });
    }
}

const POST = (req, res) => {
    createUser(req.body.name, req.body.balance, req.body.roundUp).then((err, transaction) => {
        res.status(200);
        res.send("succeeded");
    })
    .catch(e => {
        res.status(500);
        res.send(e);
    });
}

module.exports = { GET, POST };
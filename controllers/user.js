const { getUserByName, createUser } = require('../db/user.js')

const GET = (req, res) => {
    let user = req.params.name;
    if (user)
    {
        getUserByName(user).then((users) => {
            console.log(users);
            res.status(200);
            res.send(users);
        })
        .catch(e => {
            res.status(500);
            res.send(e);
        });
    }
}

const POST = (req, res) => {
    createUser(req.body.name, req.body.balance, req.body.roundUp)
    .then((user) => {
        console.log(err)
        res.status(200);
        res.send("succeeded");
    })
    .catch(e => {
        res.status(500);
        res.send(e);
    });
}

module.exports = { GET, POST };
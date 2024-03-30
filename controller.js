const User = require('./model');


const getUsers = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
};

const addUsers= (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
        .then(response => {
            res.json({ response })
    })
    .catch(error => {
        res.json({ error })
    });
}

const UpdateUser = (req, res, next) => {
    const id = request.bo
}

exports.getUsers = getUsers;
exports.getUserById = getUserById;
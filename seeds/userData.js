const { User } = require('../models')

const userData = [
    {
        first_name: "Rick",
        last_name: "Moss",
        email: "Dont@MeBro.com",
        contact_info: 345-567-9876,
        password: "Password419",
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
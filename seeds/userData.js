const { User } = require('../models')

const userData = [
    {
        first_name: "Rick",
        last_name: "Moss",
        email: "Dont@MeBro.com",
        contact_info: 345-567-9876,
        password: "$2b$10$REMKGe5P0TLO0gahJ/qrcO9S.D4AU2dRVAJIPj.D5tijvp1TkaiMW",
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
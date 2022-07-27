const { Employer } = require('../models')

const employerData = [
    {
        start_date: 1640081024000,
        end_date: 1658567024000,
        company: "Monster Magnet Solutions",
        title: "Space Lord",
        duties: "I sang the blues everyday and split the world in two"
    },
    {
        start_date: 1543745024000,
        end_date: 1612951424000,
        company: "Forty-Six and Two Productions",
        title: "Useful Idiot",
        duties: "Stepping through my shadow, coming out the other side"
    },
];

const seedEmployer = () => Employer.bulkCreate(employerData);

module.exports = seedEmployer;
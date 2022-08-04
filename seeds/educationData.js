const { Education } = require('../models')

const educationData = [
    {
        start_date:	1471856624000,
        end_date: 1526634224000,
        school: "Leeloo Dallas Institute of Technology",
        graduate: true,
        certificate: "Multi-Pass",
    },
];

const seedEducation = () => Education.bulkCreate(educationData);

module.exports = seedEducation;
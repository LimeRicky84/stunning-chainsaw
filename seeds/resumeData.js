const { Resume } = require('../models')

const resumeData = [
    {
        about: "I can chew gum and code at the same time.",
        skills: "js, css, node, git, MySQL",
        interests: "Jumping out of airplanes, picking up heavy things and then putting them back down.",
        certificates: 
        ["this Keyword Bootstrap Certificaton", "Get Method Html Certification"]
    },
];

const seedResume = () => Resume.bulkCreate(resumeData);

module.exports = seedResume;
const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedResume = require('./resumeData');
const seedEducation = require('./educationData');
const seedEmployer = require('./employerData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true })
    console.log("\n----- DATABASE SYNCED -----\n");

    await seedUser();
    console.log("\n----- USER SEEDED -----\n");
  
    await seedResume();
    console.log("\n----- RESUME SEEDED -----\n");
  
    await seedEducation();
    console.log("\n----- EDUCATION SEEDED -----\n");

    await seedEmployer();
    console.log("\n----- EMPLOYER SEEDED -----\n");

    process.exit(0)
}

seedDatabase()


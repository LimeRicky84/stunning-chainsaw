const { Resume } = require('../models')

const resumeData = [
    {
    firstName: "Bob",
    lastName: "Marley",
    email: "nwnc@marley.com",
    phoneNumber: 999999999,
    tagline: "Full Stack Developer",
    linkedin: "linkedin.com/mywebsite/",
    github: "github.com/mygithub",
    wesbite: "mywebsite.com",
    interests1: "yoga",
    interests2: "food",
    interest3: "coding",
    careerSummary: "I am good at my job",
  
    college1: "Bachelors in Education from University of Utah",
    graduated1: "2022",
    college2: "Associates in Education from Salt Lake Community College",
    graduated2: "2018",

    jobTitle1: "Clown",
    started1: "2016",
    left1: "2018",
    jobDescription1: "Worked a lot of birthday parties. Can make balloon animals.",
    achievements1: "Was able to make a snake balloon animal",

    jobTitle2: "Disneyland Character",
    started2: "2018",
    left2: "2020",
    jobDescription2: "Usually played someone in a full costume so it was typically really hot",
    achievements2: "Made my way up to Olaf",

    jobTitle3: "Hot Dog Stand",
    started3: "2020",
    left3: "2022",
    jobDescription3: "Decided to start my own hot dog stand.",
    achievements3: "My own boss",

    lang1: "html",
    lang2: "css", 
    lang3: "node.js",
    lang4: "express.js",
    lang5: "mysql",
    lang6: "javascript",
    
    projectName1: "Rubber Ducky",
    projectLink1: "github.com/rubberducky",
    projectDescript1: "Created a website that will talk back as you talk to it",

    projectName2: "Coach",
    projectLink2: "github.com/coach",
    projectDescript2: "Helps coaches communicate",

    projectName3: "Wings",
    projectLink3: "github.com/wings",
    projectDescript3: "When you click a button chicken wings appear at your door",

},
]


const seedResume = () => Resume.bulkCreate(resumeData);

module.exports = seedResume;
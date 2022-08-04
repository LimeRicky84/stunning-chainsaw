const router = require('express').Router();
const { User, Resume } = require("../../models")

router.get('/resume', async (req, res) => {
  try {
      res.render('resume')
    } catch (err) {
      res.status(500).json(err);
  }
})

router.post('/resume', async (req, res) => {
  try {
    const newResume = await Resume.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      tagline: req.body.tagline,
      linkedin: req.body.linkedin,
      github: req.body.github,
      website: req.body.website,
      interests1: req.body.interests1,
      interests2: req.body.interests2,
      interests3: req.body.interests3,
      careerSummary: req.body.careerSummary,
      college1: req.body.college1,
      graduated1: req.body.graduated1,
      college2: req.body.college2,
      graduated2: req.body.graduated2,
      jobTitle1: req.body.jobTitle1,
      started1: req.body.started1,
      left1: req.body.left1,
      jobDescription1: req.body.jobDescription1,
      achievements1: req.body.achievements1,
      jobTitle2: req.body.jobTitle2,
      started2: req.body.started2,
      left2: req.body.left2,
      jobDescription2: req.body.jobDescription2,
      achievements2: req.body.achievements2,
      jobTitle3: req.body.jobTitle3,
      started3: req.body.started1,
      left3: req.body.left3,
      jobDescription3: req.body.jobDescription3,
      achievements3: req.body.achievements3,
      lang1: req.body.lang1,
      lang2: req.body.lang2,
      lang3: req.body.lang3,
      lang4: req.body.lang4,
      lang5: req.body.lang5,
      lang6: req.body.lang6,
      projectName1: req.body.projectName1,
      projectLink1: req.body.projectLink1,
      projectDescript1: req.body.projectDescript1,
      projectName2: req.body.projectName2,
      projectLink2: req.body.projectLink2,
      projectDescript2: req.body.projectDescript2,
      projectName3: req.body.projectName3,
      projectLink3: req.body.projectLink3,
      projectDescript3: req.body.projectDescript3,     
    })
    res.status(200).json(newResume)
  } catch (err) {
    res.status(500).json(err);
  }
})

  module.exports = router;
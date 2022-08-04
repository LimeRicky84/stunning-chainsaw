const newFormHandler = async (event) => {
    event.preventDefault()

    const firstName = document.querySelector('#firstNam').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const phoneNumber = document.querySelector('#phoneNumber').value;
    const tagline = document.querySelector('#tagline').value;
    const linkedin = document.querySelector('#linkedin').value;
    const github = document.querySelector('#github').value;
    const website = document.querySelector('#website').value;
    const interests1 = document.querySelector('#interests1').value;
    const interests2 = document.querySelector('#interests2').value;
    const interests3 = document.querySelector('#interests3').value;
    const careerSummary = document.querySelector('#careerSummary').value;
    const college1 = document.querySelector('#college1').value;
    const graduated1 = document.querySelector('#graduated1').value;
    const college2 = document.querySelector('#college2').value;
    const graduated2 = document.querySelector('#graduated2').value;
    const jobTitle1 = document.querySelector('#jobTitle1').value;
    const started1 = document.querySelector('#started1').value;
    const left1 = document.querySelector('#left1').value;
    const jobDescription1 = document.querySelector('#obDescription1').value;
    const achievements1 = document.querySelector('#achievements1').value;
    const jobTitle2 = document.querySelector('#jobTitle2').value;
    const started2 = document.querySelector('#started2').value;
    const left2 = document.querySelector('#left2').value;
    const jobDescription2 = document.querySelector('#jobDescription2').value;
    const achievements2 = document.querySelector('#achievements2').value;
    const jobTitle3 = document.querySelector('#obTitle3').value;
    const started3 = document.querySelector('#started3').value;
    const left3 = document.querySelector('#left3').value;
    const jobDescription3 = document.querySelector('#jobDescription3').value;
    const achievements3 = document.querySelector('#achievements3').value;
    const lang1 = document.querySelector('#lang1').value;
    const lang2 = document.querySelector('#lang2').value;
    const lang3 = document.querySelector('#lang3').value;
    const lang4 = document.querySelector('#lang4').value;
    const lang5 = document.querySelector('#lang5').value;
    const lang6 = document.querySelector('#lang6').value;
    const projectName1 = document.querySelector('#projectName1').value;
    const projectLink1 = document.querySelector('#projectLink1').value;
    const projectDescript1 = document.querySelector('#projectDescript1').value;
    const projectName2 = document.querySelector('#projectName2').value;
    const projectLink2 = document.querySelector('#projectLink2').value;
    const projectDescript2 = document.querySelector('#projectDescript2').value;
    const projectName3 = document.querySelector('#projectName3').value;
    const projectLink3 = document.querySelector('#projectLink3').value;
    const projectDescript3 = document.querySelector('#projectDescript3').value;



    const response = await fetch('/api/input/resume', {
        method: 'POST',
        body: JSON.stringify(
            { 
                firstName,
                lastName,
                email,
                phoneNumber,
                tagline,
                linkedin,
                github,
                website,
                interests1,
                interests2,
                interests3,
                careerSummary,
                college1,
                graduated1,
                college2,
                graduated2,
                jobTitle1,
                started1,
                left1,
                jobDescription1,
                achievements1,
                jobTitle2,
                started2,
                left2,
                jobDescription2,
                achievements2,
                jobTitle3,
                started3,
                left3,
                jobDescription3,
                achievements3,
                lang1,
                lang2,
                lang3,
                lang4,
                lang5,
                lang6,
                projectName1,
                projectLink1,
                projectDescript1,
                projectName2,
                projectLink2,
                projectDescript2,
                projectName3,
                projectLink3,
                projectDescript3

            }
        ),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
    }
}
document.querySelector('submit').addEventListener('submit', newFormHandler);
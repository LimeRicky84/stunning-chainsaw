const newFormHandler = async (event) => {
    event.preventDefault()

    const firstName = document.querySelector('#article-title').value;
    const lastName = document.querySelector('#article-description').value;
    const email = document.querySelector('#article-content').value;
    const phoneNumber = document.querySelector('#article-content').value;
    const tagline = document.querySelector('#article-content').value;
    const linkedin = document.querySelector('#article-content').value;
    const github = document.querySelector('#article-content').value;
    const website = document.querySelector('#article-content').value;
    const interests1 = document.querySelector('#article-content').value;
    const interests2 = document.querySelector('#article-content').value;
    const interests3 = document.querySelector('#article-content').value;
    const careerSummary = document.querySelector('#article-content').value;
    const college1 = document.querySelector('#article-content').value;
    const graduated1 = document.querySelector('#article-content').value;
    const college2 = document.querySelector('#article-content').value;
    const graduated2 = document.querySelector('#article-content').value;
    const jobTitle1 = document.querySelector('#article-content').value;
    const started1 = document.querySelector('#article-content').value;
    const left1 = document.querySelector('#article-content').value;
    const jobDescription1 = document.querySelector('#article-content').value;
    const achievements1 = document.querySelector('#article-content').value;
    const jobTitle2 = document.querySelector('#article-content').value;
    const started2 = document.querySelector('#article-content').value;
    const left2 = document.querySelector('#article-content').value;
    const jobDescription2 = document.querySelector('#article-content').value;
    const achievements2 = document.querySelector('#article-content').value;
    const jobTitle3 = document.querySelector('#article-content').value;
    const started3 = document.querySelector('#article-content').value;
    const left3 = document.querySelector('#article-content').value;
    const jobDescription3 = document.querySelector('#article-content').value;
    const achievements3 = document.querySelector('#article-content').value;
    const lang1 = document.querySelector('#article-content').value;
    const lang2 = document.querySelector('#article-content').value;
    const lang3 = document.querySelector('#article-content').value;
    const lang4 = document.querySelector('#article-content').value;
    const lang5 = document.querySelector('#article-content').value;
    const lang6 = document.querySelector('#article-content').value;
    const projectName1 = document.querySelector('#article-content').value;
    const projectLink1 = document.querySelector('#article-content').value;
    const projectDescript1 = document.querySelector('#article-content').value;
    const projectName2 = document.querySelector('#article-content').value;
    const projectLink2 = document.querySelector('#article-content').value;
    const projectDescript2 = document.querySelector('#article-content').value;
    const projectName3 = document.querySelector('#article-content').value;
    const projectLink3 = document.querySelector('#article-content').value;
    const projectDescript3 = document.querySelector('#article-content').value;



    const response = await fetch('/api/article', {
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
document.querySelector('.new-post').addEventListener('submit', newFormHandler);
export const jobTemplate = (job, currency) => `
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">${job.title}, located exactly at latitude: ${job.latitude} and longitude: ${job.longitude} and paying much more than ${currency}${job.salary_is_predicted}</h4>
            <h5>${job.location.display_name}</h5>
            <p class="card-text">${job.description}</p>
            <a href="${job.redirect_url}" target="_blank">View Job</a>
        </div>
    `;
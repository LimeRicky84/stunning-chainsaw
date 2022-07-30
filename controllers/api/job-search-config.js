module.exports = {
  APP_ID: process.env.APP_ID,
  API_KEY: process.env.API_KEY,

  // Something about these links is preventing my api key and app id from doing their thing
  
  BASE_URL: 'https://api.adzuna.com/v1/api',
  BASE_PARAMS: 'search/1?&results_per_page=20&content-type=application/json',
};
//USE THIS! on line 17 of job-search-index.js!!!
// 'https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id={process.env.APP_ID}&api_key={process.env.API_KEY}&results_per_page=20&content-type=application/json'
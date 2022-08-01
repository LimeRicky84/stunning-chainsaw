module.exports = {
  APP_ID: process.env.APP_ID,
  APP_KEY: process.env.APP_KEY,

  // Something about these links is preventing my api key and app id from doing their thing
  
  BASE_URL: 'https://api.adzuna.com/v1/api',
  //I can follow this path and see if I have the right stuff loaded here by looking in that file where I template literal call this and the tutorial's code
  BASE_PARAMS: 'search/1?&results_per_page=20&content-type=application/json',
};
//USE THIS! on line 17 of job-search-index.js!!!
// 'https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id={process.env.APP_ID}&app_key={process.env.APP_KEY}&results_per_page=20&content-type=application/json'
// https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=62f432ef&app_key=d515b4756dfe8a30d66c49b0177b4b21&results_per_page=20&content-type=application/json

// APP_KEY='d515b4756dfe8a30d66c49b0177b4b21'
// APP_ID='62f432ef'
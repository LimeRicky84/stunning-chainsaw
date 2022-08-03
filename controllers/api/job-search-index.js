const router = require('express').Router();
const { User } = require('../../models')
const createServer = require('http').createServer;
const url = require('url');
const axios = require('axios');
const config = require('./job-search-config');

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': ('GET', 'POST')
};

router.post('/', async (req, res) => {
    try {

    // Goal: axios request to make a request to the api to get data and return it 
    axios.get('https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=62f432ef&app_key=d515b4756dfe8a30d66c49b0177b4b21&results_per_page=20&content-type=application/json')
    .then((res) => consol.log(res))
    .catch((err) => console.log(err))
    } catch (err) {
      res.status(400).json(err);
    }
});

const decodeParams = searchParams => Array
    .from(searchParams.keys())
    .reduce((acc, key) => ({ ...acc, [key]: searchParams.get(key)}), {});

const server = createServer((req, res) => {
    const requestURL = url.parse(req.url);
    const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
    const { search, location, country = 'us'} = decodedParams;
// This is where I'm talking about in line 8 of job-search-config
    const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${config.BASE_PARAMS}&app_id=${config.APP_ID}&app_key=${config.APP_KEY}&what=${search}&where=${location}`;

    if (req.method === 'GET') {
        console.log(`Proxy GET request to : ${targetURL}`);
        axios.get(targetURL)
            .then(response => {
                res.writeHead(200, headers);
                res.end(JSON.stringify(response.data));
            })
            .catch(error => {
                console.log(error);
                res.writeHead(500, headers);
                res.end(JSON.stringify(error));
            })
    }
});

// server.listen(3001, () => {
//     console.log('I hear you');
// })

module.exports = router;
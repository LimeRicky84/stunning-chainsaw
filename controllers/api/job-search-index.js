const router = require('express').Router();
const { User } = require('../../models')
const createServer = require('http').createServer;
const url = require('url');
const axios = require('axios');
const config = require('./job-search-config');

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET'
};

router.post('/', async (req, res) => {
    try {

    // Goal: axios request to make a request to the api to get data and return it instead of 
        
    //   const userData = await User.create(req.body);
  
    //   req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;
  
    //     res.status(200).json(userData);
    //   })
        res.status(200).json({"Success" : true})
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

    const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${config.BASE_PARAMS}&app_id=${config.APP_ID}&app_key=${config.API_KEY}&what=${search}&where=${location}`;

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
const ROOT_URL = 'http://api.weatherstack.com/';
const API_KEY = '075b2e484d582cdc4a0c4b2863e38a1b';

const getCurrentWeatherURL = (query) => {
    return ROOT_URL + '/current?access_key=' + API_KEY + '&' + query
}


module.exports={getCurrentWeatherURL};
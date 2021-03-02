
//==========================================================================================================
//EXTERNAL API JS (projectRoot/helpers/externalAPIName.js)
//==========================================================================================================
// Note: depending on the API requirements this may alter

const axios = require('axios');
const config = require('../config.js');

let getInfoFromAPI = (endpoint) => {

  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${endpoint}`,
    headers: {
      'Authorization':  config.TOKEN //this is what will be imported from config file
    }
  };

  return axios(options);

}

let getStylesFromAPI = (endpoint) => {
  axios.get( `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${endpoint}`)
    .then(result => {
      var data = result.map(element => {
        axios.get( `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/${endpoint}/${element.id}/styles`)
          .then(result => {
            return result;
          })
      })
      return data;
    })
}

//this export will have to be imported via require where you want to use it
module.exports.getInfoFromAPI = getInfoFromAPI;
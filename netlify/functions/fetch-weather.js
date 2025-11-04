const https = require('https');
const http = require('http');

exports.handler = async function(event, context) {
  return new Promise((resolve, reject) => {
    http.get('http://gagnaveita.vegagerdin.is/api/vedur2014_1', (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: data
        });
      });
    }).on('error', (error) => {
      resolve({
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch weather data', details: error.message })
      });
    });
  });
};

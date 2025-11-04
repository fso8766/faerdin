const https = require('https');

exports.handler = async function(event, context) {
  return new Promise((resolve, reject) => {
    https.get('https://www.vegagerdin.is/api/faerd', (res) => {
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
        body: JSON.stringify({ error: 'Failed to fetch road conditions', details: error.message })
      });
    });
  });
};

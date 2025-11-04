const http = require('http');

exports.handler = async function(event, context) {
  return new Promise((resolve, reject) => {
    http.get('http://www4.vegagerdin.is/xml/myndavelar.xml', (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: 200,
          headers: {
            'Content-Type': 'application/xml',
            'Access-Control-Allow-Origin': '*'
          },
          body: data
        });
      });
    }).on('error', (error) => {
      resolve({
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch camera data', details: error.message })
      });
    });
  });
};

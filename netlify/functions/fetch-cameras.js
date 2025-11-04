exports.handler = async function(event, context) {
  try {
    const response = await fetch('https://www.vegagerdin.is/vedur/api/camera');
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch camera data' })
    };
  }
};

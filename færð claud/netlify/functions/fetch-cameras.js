const fetch = require("node-fetch");

exports.handler = async function () {
    const url = "https://gagnaveita.vegagerdin.is/api/vefmyndavelar2014_1";
    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch camera data" }),
        };
    }
};
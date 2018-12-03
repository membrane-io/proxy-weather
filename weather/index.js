const { parse } = require('url');
const axios = require('axios');
const { TOKEN } = process.env;

module.exports = async (req, res) => {
	const URL = `http://api.openweathermap.org/data/2.5/weather`;

	const { search } = parse(req.url, true);

	if (!search) {
		res.setHeader('Content-Type', 'text/plain');
		res.end('Provide correct url or params \n');
	}

	try {
		const { data } = await axios.get(URL + search + `&appid=${TOKEN}`);
		res.end(JSON.stringify(data));
	} catch (error) {
		res.end(JSON.stringify(error.response.data));
	}
};

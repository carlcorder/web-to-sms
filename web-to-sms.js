const { till_url, phone_number, till_send, secret } = require('./config.json');
const jsonRequest = require('request-json');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public')));

const validPassword = (password) => password == secret ? true : false;

app.get('/', (request, response) => {
	response.render('index');
});

app.post('/', (request, response) => {
	if(validPassword(request.body.password)) {
		const sms = { 'phone': [phone_number], 'text' : request.body.message };
		jsonRequest.createClient(till_url)
			.post(till_send, sms, (err, res, body) => {
				res.statusCode === 200 ? response.send({success: true}) : response.send({success: false});
			});
	} else {
		response.send({success: false});
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
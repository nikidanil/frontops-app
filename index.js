const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const date = new Date();

const options = {
	era: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	weekday: 'long',
	timezone: 'UTC',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
};

app.get('/', (req, res) => {
	res.send(`Приложение работает! ${date.toLocaleString('ru', options)}`);
});

app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}`);
});

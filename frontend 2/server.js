const express = require('express');
const next = require('next');
const router = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = router.getRequestHandler(app);

app.prepare().then(() => {
	const server = express();
	server.get('*', (req, res) => handle(req, res));
	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`🤘  on http://localhost:${port}`);
 });
});

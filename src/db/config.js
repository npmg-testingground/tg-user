const env = require('../env.config');

const r = require('rethinkdbdash')({
	port: env.DB_DRIVER_PORT,
	host: env.DB_HOST
});

module.export = r;
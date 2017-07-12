/**
 * This is the basic config and export for
 * RethinkDB r query handler
 */

import env from '../env.config';

const r = require('rethinkdbdash')({
	host: env.DB_HOST,
	port: env.DB_DRIVER_PORT,
	authKey: "",
	db: env.DB_NAME
});

export default r;
var Bluebird = require('bluebird');
var env = require('../env.config');
var r = require('./config');

Bluebird.coroutine(function* () {
	try{
		yield r.dbCreate(env.DB_NAME);
		console.log(`Database ${env.DB_NAME} created!`)

		yield r.db(env.DB_NAME).tableCreate(env.DB_TABLE_NAME);
		console.log(`Table ${env.DB_TABLE_NAME} created`);

		yield r.db(env.DB_NAME).table(env.DB_TABLE_NAME).indexCreate("createdAt");
		console.log("Index `createdAt` created.");
	}
	catch(e) {
		console.log(e.message);
		console.log(e);
	}
	yield r.getPool().drain();
})();
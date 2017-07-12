import Bluebird from 'bluebird';
import env  from '../env.config';
import colors from 'colors';
import r from './config';

Bluebird.coroutine(function* () {
	try{
		yield r.dbCreate(env.DB_NAME);
		console.log(`Database ${env.DB_NAME} created!`.blue)

		yield r.db(env.DB_NAME).tableCreate(env.DB_TABLE_NAME);
		console.log(`Table ${env.DB_TABLE_NAME} created`.blue);

		yield r.db(env.DB_NAME).table(env.DB_TABLE_NAME).indexCreate("createdAt");
		console.log("Index `createdAt` created.".blue);
	}
	catch(e) {
		console.log(e.message);
		console.log(e);
	}
	yield r.getPool().drain();
})();
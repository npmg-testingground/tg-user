import env from './env.config';
import Boom from 'boom';
import r from './db/config';

import UserModel from './db/model';
export async function getAllUsers(request: Object, reply: Function): Object {
	await r.table(env.DB_TABLE_NAME).then(result => {
		reply(result);
	}).catch(err => {
		reply(Boom.badImplementation(err))
	});
}

export async function getUser(request: Object, reply: Function): Object {
	const {userId} = request.params;
	await r.table(env.DB_TABLE_NAME).get(userId).then(result => {
		reply(result);
	}).catch(err => {
		reply(Boom.badImplementation(err))
	});
}

export function* createUser(request: Object, reply: Function): Object {
	const { payload } = request;
	try {
		const result = yield r.table(env.DB_TABLE_NAME).insert(
			r.expr(payload).merge({
				createdAt: r.now()
			}),
			// This tells rethinkdb that changes sould be return
			{returnChanges: true}
		);
		reply(result);
	}
	catch(err) {
		reply(Boom.badImplementation(err));
	}
}
import * as handlers from './handlers';
import UserModel from './db/model';

const routes: Array<Object> = [
	{
		method: 'GET',
		path: '/users',
		handler: handlers.getAllUsers
	},
	{
		method: 'GET',
		path: '/users/{userId}',
		handler: handlers.getUser
	},
	{
		method: 'POST',
		path: '/users',
		handler: handlers.createUser,
		config: {
			validate: {
				payload: UserModel
			}
		}
	},
]

export default routes;

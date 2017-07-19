import * as handlers from './handlers';
import {
	UserModel,
	UserModelRequired
} from './db/model';

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
				payload: UserModelRequired
			}
		}
	},
	{
		method: 'PUT',
		path: '/users/{userId}',
		config: {
			handler: handlers.putUser,
			validate: {
				payload: UserModelRequired
			}
		}
	},
	{
		method: 'PATCH',
		path: '/users/{userId}',
		config: {
			handler: handlers.patchUser,
			validate: {
				payload: UserModel
			}
		}
	},
	{
		method: 'DELETE',
		path: '/users/{userId}',
		handler: handlers.deleteUser
	}
]

export default routes;

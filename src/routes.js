import * as handlers from './handlers';

import {
  UserModel,
  UserModelRequired
} from './db/model';

const routes = [
  {
    method: 'GET',
    path: '/users',
    handler: handlers.getAllUsers
  },
  // {
  //   method: 'GET',
  //   path: '/students',
  //   handler: handlers.getAllStudents
  // },
  // {
  //   method: 'GET',
  //   path: '/teachers',
  //   handler: handlers.getAllTeachers
  // },
  // {
  //   method: 'GET',
  //   path: '/admins',
  //   handler: handlers.getAllAdmins
  // },
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
    handler: handlers.putUser,
    config: {
      validate: {
        payload: UserModelRequired
      }
    }
  },
  {
    method: 'PATCH',
    path: '/users/{userId}',
    handler: handlers.patchUser,
    config: {
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

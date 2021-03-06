import env from './env.config';
import Boom from 'boom';
import r from './db/config';

export function getAllUsers(_request, reply) {
  r.table(env.DB_TABLE_NAME).then(result => {
    reply(result);
  }).catch(err => {
    reply(Boom.badImplementation(err))
  });
}

export function getAllStudents(_request, reply) {
  r.table(env.DB_TABLE_NAME).then(result => {
    reply(result);
  }).catch(err => {
    reply(Boom.badImplementation(err))
  });
}

export function getAllTeachers(_request, reply) {
  r.table(env.DB_TABLE_NAME).then(result => {
    reply(result);
  }).catch(err => {
    reply(Boom.badImplementation(err))
  });
}

export function getAllAdmins(_request, reply) {
  r.table(env.DB_TABLE_NAME).then(result => {
    reply(result);
  }).catch(err => {
    reply(Boom.badImplementation(err))
  });
}

export function getUser(request, reply) {
  const {userId} = request.params;
  r.table(env.DB_TABLE_NAME).get(userId).then(result => {
    reply(result);
  }).catch(err => {
    reply(Boom.badImplementation(err))
  });
}

export async function createUser(request, reply) {
  const { payload } = request;
  r.table(env.DB_TABLE_NAME).insert(
    r.expr(payload).merge({
      createdAt: r.now()
    }),
    // This tells rethinkdb that changes should be return
    {returnChanges: true}
  )
  .then(result => {
    reply(result)
  })
  .catch(err => {
    reply(Boom.badImplementation(err))
  });
}

/**
 * Change the whole object in the database,
 * you should pass the every property of the
 * object you want to change
 */
export function putUser(request, reply) {
  const { userId } = request.params;
  const { payload }  = request;
  payload.id = userId;
  r.table(env.DB_TABLE_NAME)
    .get(userId)
    .replace(payload, {returnChanges: true})
    .then(changes => {
        reply(changes)
    })
    .catch(err => {
        reply(Boom.badImplementation(err))
    });
}

/**
 * Change part of the object in the database,
 * you should pass only the properties 
 * you want to be changed
 */
export function patchUser(request, reply) {
  const { userId } = request.params;
  const { payload } = request;
  r.table(env.DB_TABLE_NAME)
    .get(userId)
    .update(payload, {returnChanges: true})
    .then(changes => {
        reply(changes)
    })
    .catch(err => {
        reply(Boom.badImplementation(err))
    });
}

export function deleteUser(request, reply) {
  const { userId } = request.params;
  r.table(env.DB_TABLE_NAME)
    .get(userId)
    .delete({returnChanges: true})
    .then(changes => {
        reply(changes)
    })
    .catch(err => {
        reply(Boom.badImplementation(err))
    });
}
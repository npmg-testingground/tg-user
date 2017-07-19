/**
 * This file handles the model/models for
 * the perticular microservice
 */

import Joi from 'joi';

export const UserModel: Object = Joi.object({
	firstName: Joi.string(),
	lastName: Joi.string(),
	email: Joi.string().email(),
	password_hash: Joi.string(),
	type: Joi.string() // oneOf(['teacher', 'student', 'admin'])
}).required();

export const UserModelRequired: Object = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	email: Joi.string().email().required(),
	password_hash: Joi.string().required(),
	type: Joi.string().required() // oneOf(['teacher', 'student', 'admin'])
}).required();

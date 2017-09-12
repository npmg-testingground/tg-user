/**
 * This file handles all env variables -
 * this includes type validation with joi
 * and exporting an object with every env var
 */
import Joi from 'joi';

const schema = Joi.object({
	SERVICE_PORT: Joi.number().default(80),
	NODE_ENV: Joi.string().default("production"),
	HOST: Joi.string().default('localhost'),
	DB_DRIVER_PORT: Joi.number().positive().default(28015),
	DB_HOST: Joi.string().default("localhost"),
	DB_NAME: Joi.string().default("TestingGround"),
	DB_TABLE_NAME: Joi.string().default("Users"),
	SECRET_TOKEN: Joi.string().default("123456")
}).unknown().required()

const {
  error,
  value: env 
} = Joi.validate(process.env, schema);
	if (error) throw error;

export default env;

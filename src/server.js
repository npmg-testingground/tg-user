// @flow
import Hapi from 'hapi'
import env from './env.config';

const server: Object = new Hapi.Server();
server.connection({
	port: env.SERVICE_PORT
});

server.start((err: String) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
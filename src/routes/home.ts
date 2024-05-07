import Fastify from 'fastify';
import GetQueryString from './home/GetQueryString';
import GetHeaders from './home/GetHeaders';
import GetReply from './home/GetReply';
import GetBody from './home/GetBody';
import pkg from '../../package.json' with{
  type: 'json',
};

const routes = async(
  fastify: Fastify.FastifyInstance,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: Fastify.RouteOptions,
  // eslint-disable-next-line require-await
) => {
  fastify.get<{
    Querystring: GetQueryString,
    Headers: GetHeaders,
    Reply: GetReply,
    Body: GetBody,
  }>('/', (request, reply,) => {
    reply.send({
      version: pkg.version,
      name: pkg.name,
      documentation: 'https//idrinth-api-ben.ch',
    },);
  },);
};
export default routes;


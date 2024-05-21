import Fastify from 'fastify';
import GetQueryString from './project/GetQueryString';
import GetHeaders from './project/GetHeaders';
import GetReply from './project/GetReply';
import GetBody from './project/GetBody';
import {
  HTTP_NO_AUTH,
} from '../constants';

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
  }>('/project/:project/routes', async(request, reply,) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.status(HTTP_NO_AUTH,).send();
      return;
    }
    reply.send({
      route1: {
        '2024-03-29': {
          mean: 2323324,
          average: 1324112,
          stdev: 1212,
          errors: 0.2,
        },
        '2024-03-30': {
          mean: 2323324,
          average: 1324112,
          stdev: 1212,
          errors: 0.4,
        },
        '2024-03-31': {
          mean: 2323324,
          average: 1324112,
          stdev: 1212,
          errors: 0.1,
        },
      },
      route2: {
        '2024-03-29': {
          mean: 1323324,
          average: 2324112,
          stdev: 9212,
          errors: 0.9,
        },
        '2024-03-30': {
          mean: 3323324,
          average: 3324112,
          stdev: 6212,
          errors: 0.8,
        },
        '2024-03-31': {
          mean: 2323324,
          average: 2324112,
          stdev: 71212,
          errors: 1,
        },
      },
    },);
  },);
};
export default routes;


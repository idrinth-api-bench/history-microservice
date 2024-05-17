import Fastify from 'fastify';
import GetQueryString from './route/GetQueryString';
import GetHeaders from './route/GetHeaders';
import GetReply from './route/GetReply';
import GetBody from './route/GetBody';
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
  }>('/project/:project/route/:route', async(request, reply,) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.status(HTTP_NO_AUTH,).send();
      return;
    }
    reply.send({
      '2024-03-29': {
        errors: 0,
        msgs: {},
        count: 6,
        stdv100: 36264265.48230901,
        stdv80: 36264265.48230901,
        avg100: 119149283,
        median100: 131103200,
        min100: 90819900,
        max100: 171386500,
        avg80: 119149283,
        median80: 131103200,
        min80: 90819900,
        max80: 171386500,
      },
      '2024-03-30': {
        errors: 0,
        msgs: {},
        count: 6,
        stdv100: 36264265.48230901,
        stdv80: 36264265.48230901,
        avg100: 119149283,
        median100: 131103200,
        min100: 90819900,
        max100: 171386500,
        avg80: 119149283,
        median80: 131103200,
        min80: 90819900,
        max80: 171386500,
      },
      '2024-03-31': {
        errors: 0,
        msgs: {},
        count: 6,
        stdv100: 36264265.48230901,
        stdv80: 36264265.48230901,
        avg100: 119149283,
        median100: 131103200,
        min100: 90819900,
        max100: 171386500,
        avg80: 119149283,
        median80: 131103200,
        min80: 90819900,
        max80: 171386500,
      },
    },);
  },);
};
export default routes;


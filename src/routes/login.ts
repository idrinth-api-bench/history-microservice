import Fastify from 'fastify';
import PostHeaders from './login/PostHeaders';
import PostReply from './login/PostReply';
import PostBody from './login/PostBody';
import PostQueryString from './login/PostQueryString';

const routes = async(
  fastify: Fastify.FastifyInstance,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: Fastify.RouteOptions,
  // eslint-disable-next-line require-await
) => {
  fastify.post<{
    Querystring: PostQueryString,
    Headers: PostHeaders,
    Reply: PostReply,
    Body: PostBody,
  }>('/login', (request, reply,) => {
    const token = fastify.jwt.sign({
      username: request.body.username,
    },);
    reply.send({
      token,
    },);
  },);
};
export default routes;


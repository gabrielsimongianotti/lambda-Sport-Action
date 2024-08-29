import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';
import "reflect-metadata"

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'devisions',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};

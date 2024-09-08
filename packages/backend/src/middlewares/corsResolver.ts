import cors, { type CorsOptions } from 'cors';
import { isExist } from 'src/helpers/isExist';
import * as process from 'node:process';

const whitelist = ['http://localhost:3000', process.env.VITE_FRONTEND_APP_HOST].filter(isExist); //white list consumers
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (isExist(origin) && whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  credentials: false,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'HEAD'],
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
export const corsResolver = cors(corsOptions);

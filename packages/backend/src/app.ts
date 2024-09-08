import 'dotenv/config';
import 'reflect-metadata';

import express, { json, Response as ExResponse, Request as ExRequest, urlencoded } from 'express';
import { AppDataSource } from './database/data-source';

import { isExist } from './helpers/isExist';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes';
import { errorHandler } from 'src/middlewares/error/errorHeandler';
import swagger from '../swagger.json' with { type: 'json' };
import { corsResolver } from 'src/middlewares/corsResolver';

const port = process.env.VITE_APP_PORT;
if (!isExist(port) || Number.isNaN(+port)) {
  throw new Error('Проверьте наличие и правильность порта в .env');
}

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(
      urlencoded({
        extended: true,
      }),
    );
    app.use(json());

    app.use(corsResolver);

    app.use('/docs', swaggerUi.serve, (_req: ExRequest, res: ExResponse) => {
      return res.send(swaggerUi.generateHTML(swagger));
    });
    RegisterRoutes(app);

    app.use(errorHandler);

    // start express server
    app.listen(+port, () => {
      console.log(
        `Express server has started on port ${port}. Open http://localhost:${port}/docs to see results`,
      );
    });
  })
  .catch((error) => console.log(error));

import express from 'express';
import endpoints from './endpoints';
import { fakeApi } from '../controllers/fakeApi';

const router = express.Router();

export default (): express.Router => {
  endpoints(router);
  router.all('/api/*', fakeApi);

  return router;
}
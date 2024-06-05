import express from 'express';
import endpoints from './endpoints';

const router = express.Router();

export default (): express.Router => {
  endpoints(router);

  return router;
}
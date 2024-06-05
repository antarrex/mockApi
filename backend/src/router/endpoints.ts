import express from 'express';
import { getAllEndpoints, addEndpoint, getEndpoint, updateEndpoint, deleteEndpoint } from '../controllers/endpoints';

export default (router: express.Router) => {
  router.get('/endpoints', getAllEndpoints);
  router.get('/endpoints/:id', getEndpoint);
  router.post('/endpoints', addEndpoint);
  router.patch('/endpoints/:id', updateEndpoint);
  router.delete('/endpoints/:id', deleteEndpoint);
}
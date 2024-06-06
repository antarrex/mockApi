import express from 'express';
import { getEndpoints } from '../db/endpoints';

export const fakeApi = async (req: express.Request, res: express.Response) => {
  try {
    const endpoints = await getEndpoints();
    const { originalUrl, method, } = req;
    const findEndpoint = endpoints.find((endpoint: any) => `/api${endpoint.url}` === originalUrl && endpoint.method === method);
    if (findEndpoint) {
      return res.status(findEndpoint.statusCode).json(JSON.parse(findEndpoint.mockJson));
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

import express from 'express';
import { getEndpoints } from '../db/endpoints';

const parseResourceId = (url: string) => {
  const splitUrl = url.replace(/\?.+/, '').replace(/\/$/, '').split('/');
  const parsedId = parseInt(splitUrl[splitUrl.length - 1]);
  return isNaN(parsedId) ? null : parsedId;
};
const parseRoute = (url: string) => {
  return url
    .replace(/(\/api)/, '')
    .replace(/\/\d+/g, '')
    .replace(/\?.+/, '')
    .replace(/\/$/, '');
};

export const fakeApi = async (req: express.Request, res: express.Response) => {
  try {
    const endpoints = await getEndpoints();
    const { path, method } = req;
    const id = parseResourceId(path);
    const route = parseRoute(path);

    const findEndpoint = endpoints.find((endpoint: any) => {
      return endpoint.url === route && endpoint.method === method
    });
    if (findEndpoint) {
      const data = JSON.parse(findEndpoint.mockJson);
      let resData;
      if (id && Array.isArray(data)) {
        resData = data.find(item => item.id === id);
        if (!resData) {
          res.status(404).json({ code: 404, message: 'Not found' });
          return res.end();
        }
      } else if (Array.isArray(data)) {
        resData = data;
        const { limit = 20, offset = 0 } = req.query;
        res.setHeader('Total-Count', resData.length);
        resData.splice(0, Number(offset));
        resData.splice(Number(limit));
      }
      return res.status(findEndpoint.statusCode).json(resData);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

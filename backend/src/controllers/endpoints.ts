import express from 'express';
import { getEndpoints, createEndpoint, getEndpointById, updateEndpointById, deleteEndpointById } from '../db/endpoints';

export const getAllEndpoints = async (req: express.Request, res: express.Response) => {
  try {
    const endpoints = await getEndpoints();
    return res.status(200).json(endpoints);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const addEndpoint = async (req: express.Request, res: express.Response) => {
  try {
    await createEndpoint(req.body);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const getEndpoint = async (req: express.Request, res: express.Response) => {
  try {
    const endpoint = await getEndpointById(req.params.id);
    return res.json(endpoint);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateEndpoint = async (req: express.Request, res: express.Response) => {
  try {
    await updateEndpointById(req.params.id, req.body);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const deleteEndpoint = async (req: express.Request, res: express.Response) => {
  try {
    const deletedEndpoint = await deleteEndpointById(req.params.id);
    return res.json(deletedEndpoint);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

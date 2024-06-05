import mongoose from 'mongoose';

const EndpointSchema = new mongoose.Schema({
  url: { type: String, required: true },
  method: { type: String, required: true },
  statusCode: { type: Number, required: true },
  mockJson: { type: String, required: true }
});

export const EndpointModel = mongoose.model('Endpoint', EndpointSchema);

export const getEndpoints = () => EndpointModel.find();
export const getEndpointById = (id: string) => EndpointModel.findById(id);
export const createEndpoint = (values: Record<string, any>) => new EndpointModel(values).save();
export const deleteEndpointById = (id: string) => EndpointModel.findOneAndDelete({ _id: id });
export const updateEndpointById = (id: string, values: Record<string, any>) => EndpointModel.findByIdAndUpdate(id, values);
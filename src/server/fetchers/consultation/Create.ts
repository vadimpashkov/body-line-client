import { FetchFunc } from '../../types';

type Request = {
  phone: string;
};

export type CreateConsultationResponse = {
  phone: string;
  id: number;
};

export const CreateConsultation: FetchFunc<Request, CreateConsultationResponse> = (client, request) =>
  client.post('/consultations/create', request);

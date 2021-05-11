import { FetchFunc } from '../../types';

export type CreateConsultationRequestType = {
  phone: string;
};

export const CreateConsultation: FetchFunc<
  CreateConsultationRequestType,
  undefined
> = (client, request) => client.post('/consult', request);

import { FetchFunc } from '../../types';

export type GetReviewsResponse = {
  id: number;
  user_id: number;
  text: string;
  users: {
    id: number;
    role_id: number;
    phone: string;
    firstname: string;
    lastname: string;
    image: string;
    created_at: Date;
    updated_at: Date;
  };
};

export const GetReviews: FetchFunc<undefined, GetReviewsResponse[]> = (client) => client.get('/reviews');

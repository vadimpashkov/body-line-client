import { useRef } from 'react';
import { useMutation } from 'react-query';

import { FetchFunc } from '../server/types';
import { AxiosFetcher } from '../server';

import { useAccessToken } from './useAccessToken';

export function useServerMutation<TRequest, TData>(
  queryName: string,
  fetchFunction: FetchFunc<TRequest, TData>
) {
  const { token } = useAccessToken();
  let { current } = useRef(new AxiosFetcher(fetchFunction, token));

  return useMutation<TData, Error, TRequest>(
    queryName,
    async (args: TRequest) => {
      const answer = await current.Fetch(args);

      if (!answer.succeeded) {
        throw new Error(answer.errorMessage);
      }

      return answer.data;
    }
  );
}

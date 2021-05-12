import { useRef } from 'react';
import { useQuery } from 'react-query';

import { FetchFunc } from '../server/types';
import { AxiosFetcher } from '../server';

import { useAccessToken } from './useAccessToken';

export function useServerQuery<TRequest, TData>(
  queryName: string,
  fetchFunction: FetchFunc<TRequest, TData>,
  args: TRequest,
  cache: boolean = true
) {
  const { token } = useAccessToken();
  let { current } = useRef(new AxiosFetcher(fetchFunction, token));

  return useQuery<TData, Error, TData>(
    queryName,
    async () => {
      const answer = await current.Fetch(args);

      if (!answer.succeeded) {
        throw new Error(answer.errorMessage);
      }

      return answer.data;
    },
    {
      cacheTime: cache ? 300 : 0,
    }
  );
}

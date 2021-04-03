import { useState, useRef } from 'react';

import { StorageReturnType, StorageAnswer, FetchFunc } from '../server/types';
import { AxiosFetcher } from '../server';

import { useAccessToken } from './useAccessToken';

type Reload = {
  reload: () => void;
};

const initialState = {
  success: false,
  message: '',
  data: undefined as any,
};

/**
 *
 * @param fetchFunction - function to be fetched. Import from storage folder.
 *
 * @returns
 *
 * reload - set hook to initial state.
 *
 * fetch - fetch function.
 *
 * state - state of answer.
 *
 * cancel - cancel request if it was send.
 *
 * @example
 * const storage = useStorage(someFetchFunc);
 *
 * useEffect(() => {
 *  storage.fetch(request);
 *
 *  return storage.cancel;
 * }, []);
 *
 * const loading = storage.state.fetching;
 * const success = !loading && storage.state.answer.succeeded;
 *
 * if (success) {
 *  // do some stuff
 *  storage.reload();
 * }
 */

export function useServer<TRequest, TData>(
  fetchFunction: FetchFunc<TRequest, TData>
): StorageReturnType<TRequest, TData> & Reload {
  const [fetching, setFetching] = useState(false);
  const [answer, setAnswer] = useState<StorageAnswer<TData>>(initialState);
  const [fetched, setFetched] = useState(false);

  const { token, setToken } = useAccessToken();
  let { current } = useRef(new AxiosFetcher(fetchFunction, token));

  const fetch = (request: TRequest) => {
    reload();
    setFetching(true);

    current
      .Fetch(request)
      .then((result) => {
        setFetching(false);
        setAnswer(result);
        setFetched(true);
      })
      .catch(() => {
        setFetching(false);
        setAnswer({
          success: false,
          message: 'Fetch error',
          data: undefined as any,
        });
        setFetched(true);

        setToken('');
      });
  };

  const reload = () => {
    setAnswer(initialState);
    setFetched(false);
    current = new AxiosFetcher(fetchFunction, token);
  };

  return {
    state: {
      answer,
      fetching,
    },
    fetch,
    cancel: current.Cancel.bind(current),
    reload,
    isFetched: fetched,
  };
}

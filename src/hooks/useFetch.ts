import { useEffect, useReducer } from 'react';

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

type FetchAction<T> =
  | { type: 'start' }
  | { type: 'success'; payload: T }
  | { type: 'failure'; error: string };

function fetchReducer<T>(state: FetchState<T>, action: FetchAction<T>): FetchState<T> {
  switch (action.type) {
    case 'start':
      return { ...state, loading: true, error: null };
    case 'success':
      return { data: action.payload, loading: false, error: null };
    case 'failure':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export function useFetch<T>(fetcher: () => Promise<T>) {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: null,
    loading: true,
    error: null,
  } as FetchState<T>);

  useEffect(() => {
    let isMounted = true;

    dispatch({ type: 'start' });

    fetcher()
      .then((result) => {
        if (isMounted) {
          dispatch({ type: 'success', payload: result });
        }
      })
      .catch((error) => {
        if (isMounted) {
          dispatch({
            type: 'failure',
            error: error instanceof Error ? error.message : 'An unknown error occurred.',
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [fetcher]);

  return state;
}

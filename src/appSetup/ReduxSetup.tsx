import { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';

import { store } from '../reduxStore';

type ReduxStateProps = {
  children: ReactElement;
};

export const ReduxState: FC<ReduxStateProps> = ({ children }: ReduxStateProps) => {
  return <Provider store={store}>{children}</Provider>;
};

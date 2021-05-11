import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

export const QueryContext: FC = (props) => <QueryClientProvider client={client}>{props.children}</QueryClientProvider>;

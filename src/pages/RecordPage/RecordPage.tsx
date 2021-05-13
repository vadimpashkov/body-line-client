import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MainLayout } from '../Layout';

import {
  RecordPageWrapper,
  RecordPageContainer,
  RecordPageMessage,
} from './RecordPage.elements';

import { RecordForm } from '../../components';

import { GetRecordUser } from '../../server';

import { useServerQuery } from '../../hooks';

export const Record: FC = () => {
  const history = useHistory();

  const { data, isLoading } = useServerQuery(
    'getUserRecordRecordPage',
    GetRecordUser,
    undefined,
    false
  );

  useEffect(() => {
    if (data !== undefined && data.length > 0) {
      history.push('/user-record');
    }
  }, [isLoading]);

  return (
    <MainLayout>
      <RecordPageWrapper>
        <RecordPageContainer>
          {isLoading ? (
            <RecordPageMessage>Загрузка...</RecordPageMessage>
          ) : (
            <RecordForm />
          )}
        </RecordPageContainer>
      </RecordPageWrapper>
    </MainLayout>
  );
};

import { FC, useEffect, useState } from 'react';

import { MainLayout } from '../Layout';

import {
  RecordWrapper,
  RecordContainer,
  RecordCard,
  RecordCardTitle,
  RecordCardDate,
  RecordCardContent,
  RecordCardText,
  RecordCardButton,
} from './Record.elements';

import { useServerMutation, useServerQuery } from '../../hooks';
import {
  DelRecordUser,
  GetRecordUser,
  GetRecordUserResponseType,
} from '../../server/fetchers/record';

import { RecordForm } from '../../components';

export const Record: FC = () => {
  const [info, setInfo] = useState<GetRecordUserResponseType>();
  const formatter = new Intl.DateTimeFormat('ru', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  const { data, isLoading } = useServerQuery(
    'getRecordUser',
    GetRecordUser,
    undefined
  );
  const { mutate: DelRecordMutate, data: DelRecordData } = useServerMutation(
    'delRecordUser',
    DelRecordUser
  );

  useEffect(() => {
    if (data !== undefined) {
      setInfo(data![0]);
    }
  }, [isLoading]);

  // FIXME: При записи на сеанс, в меню поменять кнопку
  // FIXME: Моргает страница

  const handleAdditionFormSubmit = (data: GetRecordUserResponseType) => {
    console.log(data);

    setInfo(data);
  };

  return (
    <MainLayout>
      <RecordWrapper>
        <RecordContainer>
          {info && !isLoading ? (
            <RecordCard>
              <RecordCardTitle invert>Вы записаны на сеанс</RecordCardTitle>
              <RecordCardDate>
                {formatter.format(new Date(info?.date))}
              </RecordCardDate>
              <RecordCardContent>
                <RecordCardText>Массажист</RecordCardText>
                <RecordCardText>{`${info?.masseurFirstName} ${info.masseurLastName}`}</RecordCardText>
              </RecordCardContent>
              <RecordCardContent>
                <RecordCardText>Вид массажа</RecordCardText>
                <RecordCardText>{info.massageTypeName}</RecordCardText>
              </RecordCardContent>
              <RecordCardButton
                invert
                onClick={() => {
                  DelRecordMutate({
                    id: info.id,
                  });
                  setInfo(undefined);
                }}
              >
                Отменить сеанс
              </RecordCardButton>
            </RecordCard>
          ) : (
            !isLoading && <RecordForm onSubmit={handleAdditionFormSubmit} />
          )}
        </RecordContainer>
      </RecordWrapper>
    </MainLayout>
  );
};

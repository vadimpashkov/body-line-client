import { FC, useEffect, useState } from 'react';
import { Redirect, Link, useLocation, useHistory } from 'react-router-dom';

import { MainLayout } from '../Layout';

import {
  GetRecordUser,
  GetRecordUserResponseType,
  DelRecordUser,
} from '../../server';

import {
  UserRecordPageWrapper,
  UserRecordPageContainer,
  UserRecordPageCard,
  UserRecordPageCardTitle,
  UserRecordPageCardDate,
  UserRecordPageCardContent,
  UserRecordPageCardText,
  UserRecordPageCardButton,
} from './UserRecordPage.elements';

import { useServerMutation, useServerQuery } from '../../hooks';

export const UserRecord: FC = () => {
  const [info, setInfo] = useState<GetRecordUserResponseType>();
  const [disabled, setDisabled] = useState(false);
  const [isDay, setIsDay] = useState(false);
  const history = useHistory();

  const formatter = new Intl.DateTimeFormat('ru', {
    timeZone: 'Asia/Vladivostok',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  const { data: userRecordData, isLoading: userRecordIsLoading } =
    useServerQuery('getUserRecord', GetRecordUser, undefined);

  const { mutate: userRecordDelMutate, isSuccess } = useServerMutation(
    'delUserRecordUser',
    DelRecordUser
  );

  useEffect(() => {
    if (userRecordData !== undefined && userRecordData.length > 0) {
      let day = new Date();
      const createdAt = new Date(userRecordData![0].createdAt);

      createdAt.setHours(createdAt.getHours() + 24);

      if (day > createdAt) setIsDay(true);
      setInfo(userRecordData![0]);
    }
  }, [userRecordIsLoading]);

  useEffect(() => {
    if (isSuccess) {
      history.push('/record');
    }
  }, [isSuccess]);

  return (
    <MainLayout>
      <UserRecordPageWrapper>
        <UserRecordPageContainer>
          {userRecordIsLoading ? (
            <UserRecordPageCardTitle>Загрузка...</UserRecordPageCardTitle>
          ) : (
            info && (
              <UserRecordPageCard>
                <UserRecordPageCardTitle invert>
                  Вы записаны на сеанс
                </UserRecordPageCardTitle>
                <UserRecordPageCardDate>
                  {formatter.format(new Date(info?.date))}
                </UserRecordPageCardDate>
                <UserRecordPageCardContent>
                  <UserRecordPageCardText>Массажист</UserRecordPageCardText>
                  <UserRecordPageCardText>{`${info?.masseurFirstName} ${info.masseurLastName}`}</UserRecordPageCardText>
                </UserRecordPageCardContent>
                <UserRecordPageCardContent>
                  <UserRecordPageCardText>Вид массажа</UserRecordPageCardText>
                  <UserRecordPageCardText>
                    {info.massageTypeName}
                  </UserRecordPageCardText>
                </UserRecordPageCardContent>
                {!isDay && (
                  <UserRecordPageCardButton
                    invert
                    onClick={() => {
                      userRecordDelMutate({
                        id: info.id,
                      });
                      setDisabled(true);
                    }}
                    disabled={disabled}
                  >
                    Отменить сеанс
                  </UserRecordPageCardButton>
                )}
              </UserRecordPageCard>
            )
          )}
        </UserRecordPageContainer>
      </UserRecordPageWrapper>
    </MainLayout>
  );
};

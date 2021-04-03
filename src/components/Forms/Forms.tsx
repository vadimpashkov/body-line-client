import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { useAccessToken, useServer } from '../../hooks';
import { CreateConsultation, Login, Register } from '../../server';

import Input from '../Input';
import { Text } from '../Text';
import { Button } from '../Buttons';

import { pxToRem, responsive } from '../../styles/mixins';
import { device, font } from '../../styles/Variables';

const FormStyles = styled.div``;

const LoginStyles = styled.div`
  width: min(100%, 600px);
  padding: ${responsive(24, 72)};
  background-color: ${({ theme }) => theme.palette.font};

  @media ${device.sm} {
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .title {
    margin-bottom: ${responsive(24, 36)};
    font-family: ${font.family.title.name};
    font-size: ${responsive(24, 54)};
    line-height: ${responsive(30, 64)};
    font-weight: ${font.family.title.weight};
    color: ${({ theme }) => theme.palette.background};
    text-transform: uppercase;

    .small {
      text-transform: none;
      font-weight: 400;
    }
  }

  .btn {
    width: 100%;
    margin-top: ${responsive(24, 36)};
  }

  .agreement {
    margin-top: ${pxToRem(16)};
    text-align: center;
  }
`;

type MessageProps = {
  error: string;
};

const Messages = styled.p<MessageProps>`
  display: ${({ error }) => (error?.length ? 'block' : 'none')};
  ${({ error }) => (error?.length ? `margin-top: ${responsive(24, 36)}` : 'margin-top: 0')};
  color: ${({ theme }) => theme.palette.background};
  text-align: center;
`;

type Form = {
  className?: string;
};

type ConsultationFormInputs = {
  phone: string;
};

type LoginFormInputs = {
  phone: string;
  password: string;
};

type RegFormInputs = {
  phone: string;
  password: string;
  passwordConfirmation: string;
  firstname: string;
  lastname: string;
};

const phoneRegExp = /^(\+7|8)\d{10}$/;

const validatePhone = (phone: string) => {
  return phoneRegExp.test(phone) ? true : 'Неверный формат телефона';
};

export const ConsultationForm: FC<Form> = ({ className }: Form) => {
  const { register, handleSubmit, errors, setValue } = useForm<ConsultationFormInputs>();

  const [message, setMessage] = useState('Администратор перезвонит в течении 2 часов*');
  const [error, setError] = useState('');
  // const [open, setOpen] = useState(false);

  const createConsult = useServer(CreateConsultation);

  const loading = createConsult.state.fetching;
  const fetched = createConsult.isFetched;
  const success = !loading && createConsult.state.answer.success;

  useEffect(() => {
    if (success) {
      setMessage(createConsult.state.answer.message);
      // setOpen(true);
    }
    if (fetched && !createConsult.state.answer.success) {
      setError(createConsult.state.answer.message);
    }

    createConsult.reload();
  }, [success, fetched]);

  const onSubmit = (data: ConsultationFormInputs) => {
    let result = data.phone.replace(/(\+7)/g, '');

    if (result.length > 10) {
      result = result.slice(1, 11);
    }

    setMessage('');
    setValue('phone', '');

    createConsult.fetch({
      phone: result,
    });
  };

  return (
    <>
      <FormStyles className={className}>
        <Input
          inputRef={register({
            required: {
              value: true,
              message: 'Администратор перезвонит в течении 2 часов*',
            },
            validate: validatePhone,
          })}
          type="text"
          name="phone"
          placeholder="Ваш номер телефона"
        />
        <Button onClick={handleSubmit(onSubmit)} inverse>
          Отправить
        </Button>
      </FormStyles>
      <Text className="text" primary>
        {errors.phone?.message || message || error}
      </Text>
    </>
  );
};

export const LoginForm: FC<Form> = ({ className }: Form) => {
  const { register, handleSubmit, errors } = useForm<LoginFormInputs>();

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { setToken } = useAccessToken();

  const login = useServer(Login);

  const loading = login.state.fetching;
  const fetched = login.isFetched;
  const success = !loading && login.state.answer.success;

  useEffect(() => {
    if (success) {
      setMessage(login.state.answer.message);
      setToken(login.state.answer.data!.access_token);
    }

    if (fetched && !login.state.answer.success) {
      setError(login.state.answer.message);
    }

    // console.log(login.state.answer.data);

    login.reload();
  }, [success, fetched]);

  const onSubmit = (data: LoginFormInputs) => {
    let result = data.phone.replace(/(\+7)/g, '');

    if (result.length > 10) {
      result = result.slice(1, 11);
    }

    login.fetch({
      phone: result,
      password: data.password,
    });
  };

  return (
    <LoginStyles className={className}>
      <h1 className="title">
        Вход
        <br />
        <span className="small">в ваш аккаунт</span>
      </h1>
      <Input
        type="text"
        name="phone"
        placeholder="Ваш номер телефона"
        message={errors.phone?.message}
        inputRef={register({
          required: 'Это поле обязательно',
          validate: validatePhone,
        })}
      />
      <Input
        inputRef={register({
          required: 'Это поле обязательно',
          minLength: {
            value: 6,
            message: 'Минимум 6 символов',
          },
          maxLength: {
            value: 24,
            message: 'Вы превысили лимит в 24 символа',
          },
        })}
        type="password"
        name="password"
        placeholder="Ваш пароль"
        message={errors.password?.message}
      />
      <Messages error={error}>{error}</Messages>
      <Button className="btn" inverse onClick={handleSubmit(onSubmit)}>
        Войти
      </Button>
    </LoginStyles>
  );
};

type ErrorType = {
  phone: string[];
};

export const RegForm: FC<Form> = ({ className }: Form) => {
  const { register, handleSubmit, errors, getValues } = useForm<RegFormInputs>();

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { setToken } = useAccessToken();

  const reg = useServer(Register);
  // const password = useRef({});

  // password.current = watch('password', '');

  const loading = reg.state.fetching;
  const fetched = reg.isFetched;
  const success = !loading && reg.state.answer.success;

  useEffect(() => {
    if (success) {
      setMessage(reg.state.answer.message);
      setToken(reg.state.answer.data!.access_token);
    }

    if (fetched && !reg.state.answer.success) {
      const message = (reg.state.answer.message as unknown) as ErrorType;
      if (message.phone.join(', ') === 'The phone has already been taken.') {
        setError('Данный номер телефона уже используется.');
      } else {
        setError(message.phone.join(', '));
      }
    }

    // console.log(login.state.answer.data);

    reg.reload();
  }, [success, fetched]);

  const onSubmit = (data: RegFormInputs) => {
    let result = data.phone.replace(/(\+7)/g, '');

    if (result.length > 10) {
      result = result.slice(1, 11);
    }

    reg.fetch({
      phone: result,
      password: data.password,
      password_confirmation: data.passwordConfirmation,
      firstname: data.firstname,
      lastname: data.lastname,
    });
  };

  return (
    <LoginStyles className={className}>
      <h1 className="title">
        Создание
        <br />
        <span className="small">вашего аккаунта</span>
      </h1>
      <Input
        type="text"
        name="phone"
        placeholder="Ваш номер телефона"
        message={errors.phone?.message}
        inputRef={register({
          required: 'Это поле обязательно',
          validate: validatePhone,
        })}
      />
      <Input
        type="text"
        name="firstname"
        placeholder="Ваше имя"
        message={errors.firstname?.message}
        inputRef={register({
          required: 'Это поле обязательно',
          minLength: {
            value: 2,
            message: 'Минимум 2 символа',
          },
          maxLength: {
            value: 26,
            message: 'Вы превысили лимит в 26 символов',
          },
        })}
      />
      <Input
        type="text"
        name="lastname"
        placeholder="Ваша фамилия"
        message={errors.lastname?.message}
        inputRef={register({
          required: 'Это поле обязательно',
          minLength: {
            value: 2,
            message: 'Минимум 2 символа',
          },
          maxLength: {
            value: 26,
            message: 'Вы превысили лимит в 26 символов',
          },
        })}
      />
      <Input
        inputRef={register({
          required: 'Это поле обязательно',
          minLength: {
            value: 6,
            message: 'Минимум 6 символов',
          },
          maxLength: {
            value: 24,
            message: 'Вы превысили лимит в 24 символа',
          },
        })}
        type="password"
        name="password"
        placeholder="Ваш пароль"
        message={errors.password?.message}
      />
      <Input
        inputRef={register({
          required: 'Это поле обязательно',
          minLength: {
            value: 6,
            message: 'Минимум 6 символов',
          },
          maxLength: {
            value: 24,
            message: 'Вы превысили лимит в 24 символа',
          },
          validate: (value) => value === getValues().password || 'Пароли не совпадают',
        })}
        type="password"
        name="passwordConfirmation"
        placeholder="Введите пароль повторно"
        message={errors.passwordConfirmation?.message}
      />
      <Messages error={error}>{error}</Messages>
      <Button className="btn" inverse onClick={handleSubmit(onSubmit)}>
        Зарегистрироваться
      </Button>
      <Text className="agreement">
        Нажимая кнопку «Зарегистрироваться», вы принимаете пользовательское соглашение и политику конфиденциальности.
      </Text>
    </LoginStyles>
  );
};

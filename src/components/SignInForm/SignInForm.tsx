import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { SignIn, SignInRequestType } from '../../server';
import { useAccessToken, useServerMutation } from '../../hooks';

import { Form } from '../Form';

import { InputPhone } from '../InputPhone';
import { Input } from '../Input';

import { SignInInput } from './SignInForm.elements';

export const SignInForm: FC = () => {
  const [phone, setPhone] = useState('');
  const {
    register,
    setValue,
    handleSubmit,
    errors,
  } = useForm<SignInRequestType>();
  const { mutate: login, error, data } = useServerMutation('login', SignIn);
  const { setToken } = useAccessToken();

  const onPhoneChange = (newPhone: string) => {
    setPhone(newPhone);
    setValue('username', newPhone);
  };

  const validatePhone = (phone: string) => {
    return /(\+7|8) \(\d{3}\) \d{3}\-\d{2}\-\d{2}/.test(phone)
      ? true
      : 'Неверно введен номер телефона';
  };

  const onSubmit = (data: SignInRequestType) => {
    login({
      username: data.username,
      password: data.password,
    });
  };

  if (data?.token !== undefined) {
    setToken(data.token);
  }

  return (
    <Form
      title={{ primary: 'Вход', secondary: 'в ваш аккаунт' }}
      button="Войти"
      error={error?.message}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input message={errors.username?.message}>
        <InputPhone
          name="username"
          value={phone}
          onChange={onPhoneChange}
          phoneRef={register({
            required: 'Это поле обязательно',
            validate: validatePhone,
          })}
        />
      </Input>
      <Input message={errors.password?.message}>
        <SignInInput
          type="password"
          name="password"
          placeholder="Ваш пароль"
          ref={register({
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
        />
      </Input>
    </Form>
  );
};

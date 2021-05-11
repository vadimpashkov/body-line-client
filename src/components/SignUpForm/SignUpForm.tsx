import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { SignUp } from '../../server';
import { useAccessToken, useServerMutation } from '../../hooks';

import { Form } from '../Form';

import { InputPhone } from '../InputPhone';
import { Input } from '../Input';

import { SignUpInput } from './SignUpForm.elements';

type SignUpFormInputs = {
  username: string;
  password: string;
  passwordConfirmation: string;
  firstname: string;
  lastname: string;
};

export const SignUpForm: FC = () => {
  const [phone, setPhone] = useState('');
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    errors,
  } = useForm<SignUpFormInputs>();
  const { mutate: reg, error, data } = useServerMutation('register', SignUp);
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

  const onSubmit = (data: SignUpFormInputs) => {
    reg({
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      password: data.password,
    });
  };

  if (data?.token !== undefined) {
    setToken(data.token);
  }

  return (
    <Form
      title={{ primary: 'Создание', secondary: 'вашего аккаунта' }}
      button="Зарегистрироваться"
      error={error?.message}
      description="Нажимая кнопку «Зарегистрироваться», вы даете согласие на обработку своих персональных данных."
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
      <Input message={errors.firstname?.message}>
        <SignUpInput
          type="text"
          name="firstname"
          placeholder="Ваше имя"
          ref={register({
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
      </Input>
      <Input message={errors.lastname?.message}>
        <SignUpInput
          type="text"
          name="lastname"
          placeholder="Ваша фамилия"
          ref={register({
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
      </Input>
      <Input message={errors.password?.message}>
        <SignUpInput
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
      <Input message={errors.passwordConfirmation?.message}>
        <SignUpInput
          type="password"
          name="passwordConfirmation"
          placeholder="Введите пароль повторно"
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
            validate: (value) =>
              value === getValues().password || 'Пароли не совпадают',
          })}
        />
      </Input>
    </Form>
  );
};

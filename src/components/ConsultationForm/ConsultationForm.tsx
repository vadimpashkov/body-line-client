import { FC, useState } from 'react';

import {
  ConsultationFormWrapper,
  ConsultationFormContainer,
  ConsultationButton,
  ConsultationText,
} from './ConsultationForm.elements';

import { InputPhone } from '../InputPhone';
import { useServerMutation } from '../../hooks';
import {
  CreateConsultation,
  CreateConsultationRequestType,
} from '../../server';
import { useForm } from 'react-hook-form';

export const ConsultationForm: FC = () => {
  const [phone, setPhone] = useState('');
  const {
    register,
    setValue,
    // unregister,
    handleSubmit,
    errors,
  } = useForm<CreateConsultationRequestType>();
  const { mutate: fetch, data } = useServerMutation(
    'create-consult',
    CreateConsultation
  );

  // useEffect(() => {
  //   register('phone', {
  //     validate: (validatable: string) => {
  //       const result = /(\+7|8) \(\d\d\d\) \d\d\d\-\d\d\-\d\d/.test(
  //         validatable
  //       );

  //       return (!result && 'Неверно введен номер телефона') || true;
  //     },
  //   });
  //   setValue('phone', '');

  //   return () => {
  //     unregister('phone');
  //   };
  // }, []);

  const onPhoneChange = (newPhone: string) => {
    setPhone(newPhone);
    setValue('phone', newPhone);
  };

  const onSubmit = (data: CreateConsultationRequestType) => {
    let result = data.phone.replace(/^8/, '+7');

    fetch({
      phone: result,
    });

    setValue('phone', '');
    setPhone('');
  };

  const validatePhone = (phone: string) => {
    return phone.length === 0
      ? 'Введите номер телефона'
      : /(\+7|8) \(\d{3}\) \d{3}\-\d{2}\-\d{2}/.test(phone)
      ? true
      : 'Неверно введен номер телефона';
  };

  return (
    <ConsultationFormWrapper>
      <>
        <ConsultationFormContainer>
          <InputPhone
            name="phone"
            value={phone}
            onChange={onPhoneChange}
            phoneRef={register({
              validate: validatePhone,
            })}
          />
          <ConsultationButton onClick={handleSubmit(onSubmit)} invert>
            Отправить
          </ConsultationButton>
        </ConsultationFormContainer>
        <ConsultationText primary>
          {errors.phone?.message ||
            'Администратор перезвонит в течении 2 часов*'}
        </ConsultationText>
      </>
    </ConsultationFormWrapper>
  );
};

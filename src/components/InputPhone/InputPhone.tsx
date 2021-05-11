import { FC } from 'react';

import { FormatPhone } from './formatPhone';

import { InputPhoneWrapper } from './InputPhone.elements';

type InputPhoneProps = {
  className?: string;
  id?: string;
  name?: string;
  phoneRef?: any;
  value: string;
  onChange: (value: string) => void;
};

export const InputPhone: FC<InputPhoneProps> = ({
  className,
  id,
  name,
  value,
  onChange,
  phoneRef,
}: InputPhoneProps) => {
  const handleChange = (newValue: string) => {
    const formattedInputValue = FormatPhone(newValue);
    onChange(formattedInputValue);
  };

  return (
    <InputPhoneWrapper
      className={className}
      id={id}
      name={name}
      type="tel"
      placeholder="Ваш номер телефона"
      value={value}
      onChange={(event) => {
        const inputEvent = event.target.value;
        if (inputEvent !== null) {
          handleChange(inputEvent);
        }
      }}
      ref={phoneRef}
    />
  );
};

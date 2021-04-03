import { FC } from 'react';
import styled from 'styled-components';

import { pxToRem, responsive } from '../../styles/mixins';
import { device } from '../../styles/Variables';

const InputRow = styled.div`
  margin-bottom: ${responsive(16, 24)};

  :last-of-type {
    margin-bottom: 0;
  }

  @media ${device.xs} {
    text-align: center;
    min-width: initial;
    width: 100%;
  }
`;

const InputStyles = styled.input`
  padding: ${pxToRem(16)};
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.background};
  border: 1px solid ${({ theme }) => theme.palette.background};
`;

const InputError = styled.p<InputErrorProps>`
  display: ${({ message }) => (message?.length ? 'block' : 'none')};
  margin-bottom: ${({ message }) => (message?.length ? pxToRem(10) : '0')};
  color: ${({ theme }) => theme.palette.background};
  text-align: left;
`;

type InputProps = {
  type: string;
  placeholder?: string;
  value?: string;
  name: string;
  inputRef?: any;
  message?: string | undefined;
};

type InputErrorProps = {
  message: string | undefined;
};

const Input: FC<InputProps> = ({ placeholder, value, type, name, inputRef, message }: InputProps) => {
  return (
    <InputRow>
      <InputError message={message}>{message}</InputError>
      <InputStyles ref={inputRef} type={type} placeholder={placeholder} value={value} name={name}></InputStyles>
    </InputRow>
  );
};

export default Input;

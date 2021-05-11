import styled from 'styled-components';

import { device, font } from '../../styles/Variables';

type InputErrorProps = {
  message?: string;
};

export const InputRow = styled.div`
  .data-picker * {
    color: var(--color-font-primary-invert);
    font-family: ${font.family.text.name};
    font-size: ${font.size}px;
    padding: 0;
    cursor: pointer;
  }

  .data-picker {
    padding: var(--margin-small);
    /* color: ${font.family.text.name}; */
    border: 1px solid #fff;

    &:active {
      outline: none;
    }
  }
`;

export const InputError = styled.p<InputErrorProps>`
  margin-bottom: 10px;
  color: var(--color-font-primary-invert);
  text-align: left;
`;

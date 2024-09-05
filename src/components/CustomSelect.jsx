import styled from "styled-components";

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      height: '50px',
      padding: '0.25rem',
      backgroundColor: 'var(--colors-ui-base)',
      border: 'none',
      borderRadius: 'var(--radii)',
      boxShadow: 'var(--shadow)',
      color: 'var(--colors-text)',
      cursor: 'pointer'
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
    }),
  }
})`
  width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div:last-child {
    background-color: var(--colors-ui-base);
  }
`;
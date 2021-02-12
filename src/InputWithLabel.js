import React from 'react';
import styles from './App.module.css';
import { StyledLabel, StyledInput } from './styles';

const InputWithLabel = ({
  id,
  value,
  onInputChange,
  type = 'text',
  isFocused,
  children,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div>
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
      &nbsp;
      <StyledInput
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

export default InputWithLabel;

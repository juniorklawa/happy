import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <textarea defaultValue={defaultValue} ref={textareaRef} {...rest} />
    </Container>
  );
};

export default Input;

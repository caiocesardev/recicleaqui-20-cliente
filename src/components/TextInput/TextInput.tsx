// Arquivo: src/components/TextInput/TextInput.tsx

import React from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native'; // Renomeamos para evitar conflito
import styled from 'styled-components/native';

// Definimos as props do nosso componente.
// Ele aceitará todas as props de um TextInput normal (RNTextInputProps)
// e mais uma prop opcional chamada 'error'.
type TextInputProps = RNTextInputProps & {
  error?: string; 
};

// --- Componentes Estilizados ---

const InputWrapper = styled.View`
  width: 100%;
  margin-bottom: 5px; /* Reduzimos a margem para o erro ficar mais próximo */
`;

const StyledInput = styled.TextInput`
  background-color: #fff;
  border-radius: 25px;
  border: 1px solid #e0e0e0;
  padding: 15px 20px;
  font-size: 16px;
  width: 100%;
  height: 55px; /* Altura fixa para consistência */
`;

const ErrorText = styled.Text`
  color: #cc0000; /* Vermelho para erros */
  font-size: 12px;
  margin-top: 4px;
  margin-left: 20px;
  height: 15px; /* Altura fixa para não "empurrar" o layout */
`;

// --- Componente Principal ---

// Usamos '{ error, ...props }' para separar nossa prop customizada
// e passar todas as outras props padrão (...props) para o StyledInput.
const TextInput = ({ error, ...props }: TextInputProps) => {
  return (
    <InputWrapper>
      <StyledInput 
        placeholderTextColor="#A9A9A9" // Cor do placeholder
        {...props} // Passa todas as props (value, onChangeText, etc.)
      />
      {/* Renderiza o texto de erro apenas se a prop 'error' existir */}
      <ErrorText>{error || ''}</ErrorText>
    </InputWrapper>
  );
};

export default TextInput;
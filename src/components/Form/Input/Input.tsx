import {
  Input as CInput,
  InputProps as CInputProps,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Text } from 'components/Elements/Text';
import { ReactElement } from 'react';

// label ?
export type Props = {
  errorMessage?: string;
  type?: 'text' | 'email' | 'password';
  suffix?: ReactElement;
} & Omit<CInputProps, 'type'>;

export const Input = (props: Props) => {
  return (
    <>
      <InputGroup>
        <CInput {...props} />
        <InputRightElement>{props.suffix && props.suffix}</InputRightElement>
      </InputGroup>
      {props.errorMessage && (
        <Text color='danger' fontSize='md'>
          {props.errorMessage}
        </Text>
      )}
    </>
  );
};

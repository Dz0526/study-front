import {
  Input as CInput,
  InputProps as CInputProps,
  InputGroup,
  InputRightElement,
  forwardRef,
} from '@chakra-ui/react';
import { Text } from 'components/Elements/Text';
import { ReactElement } from 'react';

// label ?
export type InputProps = {
  errormessage?: string;
  type?: 'text' | 'email' | 'password' | 'file';
  suffix?: ReactElement;
} & Omit<CInputProps, 'type'>;

export const Input = forwardRef<InputProps, 'input'>((props, ref) => {
  return (
    <>
      <InputGroup>
        <CInput {...props} ref={ref} />
        <InputRightElement>{props.suffix && props.suffix}</InputRightElement>
      </InputGroup>
      {props.errormessage && (
        <Text color='danger' fontSize='md'>
          {props.errormessage}
        </Text>
      )}
    </>
  );
});

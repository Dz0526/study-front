import { ControlledInput } from '../ControlledInput';
import { InputProps } from 'components/Form/Input';
import { Icon } from '@chakra-ui/react';
import { FaEyeSlash } from 'react-icons/fa';
import { FieldValues, UseControllerProps } from 'react-hook-form';
import { useState } from 'react';

type Props<T extends FieldValues> = {
  isRequired?: boolean;
  label?: string;
} & Pick<UseControllerProps<T>, 'name' | 'control'> &
  Omit<InputProps, 'type' | 'suffix'>;

export const ControlledPasswordInput = <T extends FieldValues>({
  isRequired,
  label,
  name,
  control,
  ...rest
}: Props<T>) => {
  const [inputType, setInputType] = useState<'password' | 'text'>('password');
  return (
    <ControlledInput
      name={name}
      control={control}
      label={label}
      type={inputType}
      isRequired={isRequired}
      suffix={
        <Icon
          as={FaEyeSlash}
          _hover={{ cursor: 'pointer' }}
          onClick={() => {
            inputType == 'password'
              ? setInputType('text')
              : setInputType('password');
          }}
        />
      }
      {...rest}
    />
  );
};

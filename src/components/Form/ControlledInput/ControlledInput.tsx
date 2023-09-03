import { FormControl, FormLabel } from '@chakra-ui/react';
import { Input, InputProps } from 'components/Form/Input';
import {
  useController,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

type Props<T extends FieldValues> = {
  isRequired?: boolean;
  label?: string;
} & Pick<UseControllerProps<T>, 'name' | 'control'> &
  InputProps;

export const ControlledInput = <T extends FieldValues>({
  isRequired,
  name,
  control,
  label,
  ...rest
}: Props<T>) => {
  const {
    field,
    formState: { errors },
  } = useController({ name, control });

  const errorMessage = errors[name]?.message as string;
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel fontWeight={'bold'}>{label}</FormLabel>
      <Input
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
        ref={field.ref}
        value={field.value}
        errorMessage={errorMessage}
        {...rest}
      />
    </FormControl>
  );
};

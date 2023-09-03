import { FormControl, Checkbox, CheckboxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const ControlledCheckbox = (
  props: CheckboxProps & { children: ReactNode },
) => {
  return (
    <FormControl>
      <Checkbox {...props}>{props.children}</Checkbox>
    </FormControl>
  );
};

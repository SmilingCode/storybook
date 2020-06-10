import React from 'react';
import { withStyles } from '@material-ui/styles';
import { labelStyles, helperStyles, inputStyles } from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
// import InputBase, {
//   InputBaseProps as MuiInputBaseProps,
// } from "@material-ui/core/InputBase";
// import OutlinedInput, {
//   OutlinedInputProps as MuiOutlinedProps,
// } from "@material-ui/core/OutlinedInput";
import TextField, {
  OutlinedTextFieldProps as MuiTextFieldProps
} from '@material-ui/core/TextField';

import { InputAdornment } from '@material-ui/core';

const BaseLabel = withStyles(labelStyles)(InputLabel);
const BaseHelper = withStyles(helperStyles)(FormHelperText);
const BaseInput = withStyles(inputStyles)(TextField);

interface InputBaseProps extends MuiTextFieldProps {
  label: string;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'end' | 'start';
  select?: boolean;
  dropdownIcon?: React.ElementType;
  selectItems?: { label: string; value: string }[];
}

export const TextFieldBase = (props: InputBaseProps): JSX.Element => {
  const {
    label,
    helperText,
    icon,
    iconPosition,
    select,
    dropdownIcon,
    selectItems,
    ...others
  } = props;
  return (
    <FormControl>
      <BaseLabel shrink={true}>{label}</BaseLabel>
      {helperText && <BaseHelper>{helperText}</BaseHelper>}
      <BaseInput
        {...others}
        variant='outlined'
        placeholder='Placeholder'
        InputProps={{
          startAdornment: icon && iconPosition === 'start' && (
            <InputAdornment position={iconPosition}>{icon}</InputAdornment>
          ),
          endAdornment: icon && iconPosition === 'end' && (
            <InputAdornment position={iconPosition}>{icon}</InputAdornment>
          )
        }}
        select={select}
        SelectProps={{
          native: true,
          IconComponent: dropdownIcon
        }}
      >
        {select &&
          selectItems &&
          selectItems.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
      </BaseInput>
    </FormControl>
  );
};

interface TextFieldLeadingProps extends InputBaseProps {
  icon: React.ReactNode;
}

export const TextFieldLeading = ({
  icon,
  ...others
}: TextFieldLeadingProps): JSX.Element => {
  return (
    <TextFieldBase
      {...others}
      InputProps={{
        startAdornment: <InputAdornment position='start'>{icon}</InputAdornment>
      }}
      // startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
    />
  );
};

interface TextFieldTrailingProps extends InputBaseProps {
  iconType: React.ElementType;
  selectItems: { label: string; value: string }[];
}

export const TextFieldTrailing = ({
  iconType,
  selectItems,
  ...others
}: TextFieldTrailingProps): JSX.Element => {
  return (
    <TextFieldBase
      {...others}
      select
      SelectProps={{
        native: true,
        IconComponent: iconType
      }}
    >
      {selectItems.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </TextFieldBase>
  );
};

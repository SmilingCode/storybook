import React, { FC } from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { TextFieldBase, TextFieldLeading, TextFieldTrailing } from '.';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import PropTypes from 'prop-types';

interface TextFieldProps {
  /**
   * label is the only props required here
   */
  label: string;
  /**
   * set up this helperText if you need this part
   */
  helperText?: string;
  /**
   * you can customize your own icon in this textfield.(required React.ReactNode)
   */
  icon?: React.ReactNode;
  /**
   * indicate your icon position either in front(start) or end(end) of this textfield
   */
  iconPosition?: 'end' | 'start';
  /**
   * this textfiled will change to select if set this select prop to true
   */
  select?: boolean;
  dropdownIcon?: React.ElementType;
  selectItems?: { label: string; value: string }[];
}

export const TextField: FC<TextFieldProps> = ({
  label = 'Label',
  helperText,
  icon,
  iconPosition,
  select,
  dropdownIcon,
  selectItems
}) => {
  return (
    <TextFieldBase
      variant='outlined'
      label={text('LabelName', label)}
      helperText={helperText && text('HelperText', helperText)}
      icon={icon}
      iconPosition={iconPosition}
      select={select}
      dropdownIcon={dropdownIcon}
      selectItems={selectItems}
      error={boolean('ErrorBool', false)}
      disabled={boolean('DisabledBool', false)}
    />
  );
};

TextField.defaultProps = {
  label: 'label',
  helperText: 'helppp'
};

export default {
  title: 'Components/TextField',
  parameters: {
    component: TextField,
    description: 'Show TextField'
  },
  decorators: [withKnobs]
};

export function testCustomizeTextField(): JSX.Element {
  const selectItems = [
    {
      value: '1',
      label: '1'
    },
    {
      value: '2',
      label: '2'
    }
  ];
  return (
    <TextField
      label='Custom Text Field'
      helperText='Helppppp'
      dropdownIcon={RadioButtonUncheckedIcon}
      icon={<RadioButtonUncheckedIcon />}
      iconPosition='end'
    />
  );
}

export function textFieldLeading(): JSX.Element {
  return (
    <TextFieldLeading
      variant='outlined'
      label={text('LabelName', 'Label')}
      helperText={text('HelperText', 'Helper Text')}
      error={boolean('ErrorBool', false)}
      disabled={boolean('DisabledBool', false)}
      icon={<RadioButtonUncheckedIcon />}
    />
  );
}

export function textFieldTrailing(): JSX.Element {
  const selectItems = [
    {
      value: '1',
      label: '1'
    },
    {
      value: '2',
      label: '2'
    }
  ];
  return (
    <TextFieldTrailing
      variant='outlined'
      label={text('LabelName', 'Label')}
      helperText={text('HelperText', 'Helper Text')}
      error={boolean('ErrorBool', false)}
      disabled={boolean('DisabledBool', false)}
      iconType={RadioButtonUncheckedIcon}
      selectItems={selectItems}
    />
  );
}

TextField.propTypes = {
  /**
   * label is the only props required here
   */
  label: PropTypes.string.isRequired,
  /**
   * set up this helperText if you need this part
   */
  helperText: PropTypes.string,
  /**
   * you can customize your own icon in this textfield.(required React.ReactNode)
   */
  icon: PropTypes.node,
  /**
   * indicate your icon position either in front(start) or end(end) of this textfield
   */
  iconPosition: PropTypes.oneOf(['end', 'start']),
  /**
   * this textfiled will change to select if set this select prop to true
   */
  select: PropTypes.bool,
  selectItems: PropTypes.array
};

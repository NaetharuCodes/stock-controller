import { useState } from 'react';
import { Group, Switch } from '@mantine/core';

interface ToggleProps {
  label?: string;
  description?: string;
  defaultChecked: boolean;
  onChange: (current: boolean) => void;
  size: 'sm' | 'md' | 'lg';
  color: 'blue' | 'red' | 'green';
  disabled: boolean;
}

const Toggle = ({
  label = 'Dark Mode',
  description,
  defaultChecked = false,
  onChange,
  size = 'md',
  color = 'blue',
  disabled = false,
}: ToggleProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
    if (onChange) {
      onChange(event.currentTarget.checked);
    }
  };

  return (
    <Group>
      <Switch
        checked={checked}
        onChange={handleChange}
        label={label}
        description={description}
        size={size}
        color={color}
        disabled={disabled}
      />
    </Group>
  );
};

export default Toggle;

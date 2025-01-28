import { Button, Group, useMantineColorScheme } from '@mantine/core';
import Toggle from '../Toggle/Toggle';

export function ColorSchemeToggle() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Toggle
        onChange={() => toggleColorScheme()}
        size="md"
        color="red"
        defaultChecked
        disabled={false}
      />
    </Group>
  );
}

import '@mantine/core/styles.css';

import { AppShell, Burger, Group, MantineProvider, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CustomAppShell from './components/AppShell/AppShell';
import StockIcon from './icons/StockIcon';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <CustomAppShell>
        <Router />
      </CustomAppShell>
    </MantineProvider>
  );
}

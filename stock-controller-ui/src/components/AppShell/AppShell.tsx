import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import StockIcon from '@/icons/StockIcon';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

interface CustomAppShellProps {
  children: React.ReactNode;
}

const CustomAppShell = ({ children }: CustomAppShellProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          <StockIcon height="40px" width="40px" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar
        p="md"
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <div>
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </div>
        <ColorSchemeToggle />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default CustomAppShell;

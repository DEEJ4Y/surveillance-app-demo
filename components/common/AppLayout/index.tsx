import { useDisclosure } from "@mantine/hooks";
import { Drawer, Burger, Container, Text, NavLink, Stack } from "@mantine/core";
import Link from "next/link";
import {
  Dashboard,
  Bell,
  DeviceComputerCamera,
  User,
} from "tabler-icons-react";

interface AppLayoutProps {
  title: string;
  children: React.ReactNode | undefined;
}

export default function AppLayout(props: AppLayoutProps) {
  const [opened, { close, toggle }] = useDisclosure(false);

  return (
    <>
      <Drawer
        w={230}
        opened={opened}
        onClose={close}
        title="Surveillance System"
      >
        {/* Drawer content */}
        <Stack>
          <Link
            href="/dashboard"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <NavLink label="Home" leftSection={<Dashboard />} />
          </Link>
          <Link
            href="/alerts"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <NavLink label="Alerts" leftSection={<Bell />} />
          </Link>
          <Link
            href="/systems"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <NavLink
              label="Surveillance Systems"
              leftSection={<DeviceComputerCamera />}
            />
          </Link>
          <Link
            href="/account"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <NavLink label="Account" leftSection={<User />} />
          </Link>
        </Stack>
      </Drawer>

      <Container
        display="flex"
        p="md"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Burger onClick={toggle} />
        <Text fw={700} pr="md">
          {props.title}
        </Text>
      </Container>

      <Container py={0}>{props.children}</Container>
    </>
  );
}

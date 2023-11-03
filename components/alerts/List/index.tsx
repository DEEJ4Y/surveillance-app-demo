import { useLocalStorage } from "@/components/hooks/useLocalStorage";
import { Stack, Paper, Group, Text } from "@mantine/core";

export interface AlertsListProps {
  latestOnly?: boolean;
}

export default function AlertsList(props: AlertsListProps) {
  const [alerts] = useLocalStorage("alerts", [
    {
      timestamp: new Date("November 1, 2023 09:45:08"),
      deviceId: 1,
      systemId: 1,
    },
    {
      timestamp: new Date("November 1, 2023 09:45:23"),
      deviceId: 1,
      systemId: 1,
    },
    {
      timestamp: new Date("November 1, 2023 09:45:37"),
      deviceId: 1,
      systemId: 1,
    },
    {
      timestamp: new Date("November 1, 2023 09:48:17"),
      deviceId: 1,
      systemId: 1,
    },
  ]);

  const [systems] = useLocalStorage("systems", [
    {
      id: 1,
      name: "Home",
      description: "Surveillance and NAS system for Home",
    },
  ]);

  const [devices] = useLocalStorage("devices", [
    {
      id: 1,
      name: "Front Door",
      description: "Camera facing front door of the house",
      systemId: 1,
    },
  ]);

  return (
    <Stack>
      {alerts
        ?.filter((_, idx) =>
          props.latestOnly ? (idx === alerts.length - 1 ? true : false) : true
        )
        .map((alert, idx) => {
          const system = systems.find((system) => system.id === alert.systemId);
          const device = devices.find((device) => device.id === alert.deviceId);

          return (
            <Paper withBorder key={`alert-card-${idx}`} p="md">
              <Stack>
                <Text c="dimmed">{alert.timestamp.toLocaleString()}</Text>
                <Group justify="space-between">
                  <Text fw={700}>System</Text>
                  <Text>{system?.name}</Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={700}>Device</Text>
                  <Text>{device?.name}</Text>
                </Group>
              </Stack>
            </Paper>
          );
        })}
    </Stack>
  );
}

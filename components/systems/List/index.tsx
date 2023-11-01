import { useLocalStorage } from "@/components/hooks/useLocalStorage";
import { Stack, Paper, Group, Text } from "@mantine/core";

export default function SystemsList() {
  const [systems] = useLocalStorage("systems", [
    {
      id: 1,
      name: "Home",
      description: "Surveillance and NAS system for Home",
    },
  ]);

  const [devices] = useLocalStorage("systems", [
    {
      id: 1,
      name: "Front Door",
      description: "Camera facing front door of the house",
      systemId: 1,
    },
  ]);

  return (
    <Stack>
      {systems?.map((system, idx) => {
        const systemDevices = devices.filter(
          (device) => device.systemId === system.id
        );

        return (
          <Paper withBorder key={`alert-card-${idx}`} p="md">
            <Stack>
              <Text fw={500}>{system?.name}</Text>
              <Text>{system?.description}</Text>
              <Group justify="space-between">
                <Text>Camera Count</Text>
                <Text>{systemDevices.length}</Text>
              </Group>
            </Stack>
          </Paper>
        );
      })}
    </Stack>
  );
}

import AppLayout from "@/components/common/AppLayout";
import { Title, Group, Text, Stack } from "@mantine/core";

export default function AccountPage() {
  return (
    <AppLayout title="Account">
      <Title order={1} mb="md">
        My Account
      </Title>
      <Stack>
        <Group justify="space-between">
          <Text fw={500}>Name</Text>
          <Text>David Joseph</Text>
        </Group>
        <Group justify="space-between">
          <Text fw={500}>Email</Text>
          <Text>dj0593@srmist.edu.in</Text>
        </Group>
      </Stack>
    </AppLayout>
  );
}

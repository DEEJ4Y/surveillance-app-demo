import AppLayout from "@/components/common/AppLayout";
import SystemsList from "@/components/systems/List";
import { Title } from "@mantine/core";

export default function SystemsPage() {
  return (
    <AppLayout title="Systems">
      <Title order={1} mb="md">
        Systems
      </Title>
      <SystemsList />
    </AppLayout>
  );
}

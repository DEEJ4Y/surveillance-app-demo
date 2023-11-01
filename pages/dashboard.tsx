import AlertsList from "@/components/alerts/List";
import AppLayout from "@/components/common/AppLayout";
import { useLocalStorage } from "@/components/hooks/useLocalStorage";
import SystemsList from "@/components/systems/List";
import { Title } from "@mantine/core";

export default function DashboardPage() {
  return (
    <AppLayout title="Dashboard">
      <Title order={2} mb="md">
        Alerts
      </Title>
      <AlertsList />
      <Title order={2} my="md">
        Systems
      </Title>
      <SystemsList />
    </AppLayout>
  );
}

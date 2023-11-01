import AlertsList from "@/components/alerts/List";
import AppLayout from "@/components/common/AppLayout";
import { Title } from "@mantine/core";

export default function AlertsPage() {
  return (
    <AppLayout title="Alerts">
      <Title order={1} mb="md">
        Alerts
      </Title>
      <AlertsList />
    </AppLayout>
  );
}

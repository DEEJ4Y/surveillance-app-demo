import AppLayout from "@/components/common/AppLayout";
import SystemsList from "@/components/systems/List";
import { Button, Group, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useState } from "react";

export default function SystemsPage() {
  const [registering, setRegistering] = useState(false);
  return (
    <AppLayout title="Systems">
      <Title order={1} mb="md">
        <Group justify="space-between">
          <span>Systems</span>
          <Button
            onClick={() => {
              if (!registering) {
                const id = notifications.show({
                  title: "Registering Devices",
                  message: "Searching for devices on your local network",
                  loading: true,
                  autoClose: false,
                  withCloseButton: false,
                  color: "blue",
                });

                setRegistering(true);

                setTimeout(() => {
                  notifications.update({
                    id,
                    loading: false,
                    message:
                      "No systems or devices were found on your network.",
                    autoClose: 5000,
                    withCloseButton: true,
                  });

                  setRegistering(false);
                }, 10000);
              } else {
                notifications.show({
                  title: "Device Registration in Progress",
                  message:
                    "Please wait for the device registration to finish before trying again.",
                  color: "red",
                  autoClose: 5000,
                });
              }
            }}
          >
            Register Device
          </Button>
        </Group>
      </Title>
      <SystemsList />
    </AppLayout>
  );
}

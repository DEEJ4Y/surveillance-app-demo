import { useEffect } from "react";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { useLocalStorage } from "@/components/hooks/useLocalStorage";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  const [alerts, setAlerts] = useLocalStorage("alerts", [
    {
      timestamp: new Date("November 1, 2023 09:45:08"),
      deviceId: 1,
      systemId: 1,
    },
  ]);
  const [systems, setSystems] = useLocalStorage("systems", [
    {
      id: 1,
      name: "Home",
      description: "Surveillance and NAS system for Home",
    },
  ]);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log(
              "Service Worker registered with scope:",
              registration.scope
            );
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      });
    }
  }, []);

  useEffect(() => {
    if (alerts) {
      console.log({ alerts });
      if (alerts.length === 0) {
        setAlerts(() => [
          ...[
            {
              timestamp: new Date("November 1, 2023 09:45:08"),
              deviceId: 1,
              systemId: 1,
            },
          ],
        ]);
      }
    }
  }, [alerts]);

  useEffect(() => {
    if (systems) {
      console.log({ systems });
      if (systems.length === 0) {
        setSystems(() => [
          ...[
            {
              id: 1,
              name: "Home",
              description: "Surveillance and NAS system for Home",
            },
          ],
        ]);
      }
    }
  }, [systems]);

  return (
    <MantineProvider theme={theme}>
      <Notifications position="bottom-center" />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

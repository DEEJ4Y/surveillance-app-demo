import { Container, Text, Button, Group } from "@mantine/core";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * The BeforeInstallPromptEvent is fired at the Window.onbeforeinstallprompt handler
 * before a user is prompted to "install" a web site to a home screen on mobile.
 *
 */
interface BeforeInstallPromptEvent extends Event {
  /**
   * Returns an array of DOMString items containing the platforms on which the event was dispatched.
   * This is provided for user agents that want to present a choice of versions to the user such as,
   * for example, "web" or "play" which would allow the user to chose between a web version or
   * an Android version.
   */
  readonly platforms: Array<string>;

  /**
   * Returns a Promise that resolves to a DOMString containing either "accepted" or "dismissed".
   */
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;

  /**
   * Allows a developer to show the install prompt at a time of their own choosing.
   * This method returns a Promise.
   */
  prompt(): Promise<void>;
}

export function HeroTitle() {
  const router = useRouter();

  const [deferredPrompt, setDefferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      console.log({ event, deferredPrompt });

      // Prevent the default browser install prompt
      event.preventDefault();
      // Store the event for later use
      setDefferredPrompt(event as BeforeInstallPromptEvent);

      console.log({ event, deferredPrompt });
    });
  }, []);

  return (
    <div>
      <Container>
        <h1>
          A{" "}
          <Text
            size="xl"
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Secure Surveillance System
          </Text>{" "}
          for your home
        </h1>

        <Text size="lg" c="dimmed" mb="xl">
          The next generation surveillance system, that makes use of Artifical
          Intelligence to detect suspicious activity, so you can be alerted as
          soon as possible.
        </Text>

        {deferredPrompt ? (
          <Group>
            <Button
              size="lg"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              onClick={() => {
                if (deferredPrompt) {
                  // Trigger the installation prompt
                  deferredPrompt.prompt();

                  // Wait for the user to respond to the prompt
                  deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === "accepted") {
                      console.log("User accepted the installation");
                    } else {
                      console.log("User declined the installation");
                    }
                    // Reset deferredPrompt to null
                    setDefferredPrompt(null);

                    router.push("/?mode=standalone");
                  });
                }
              }}
            >
              Install App
            </Button>
          </Group>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}

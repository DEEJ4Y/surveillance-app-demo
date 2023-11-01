import { HeroTitle } from "@/components/index/Header";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (router) {
      const mode = searchParams.get("mode");

      if (mode === "standalone") {
        router.push("/dashboard");
      }
    }
  }, [router, searchParams]);

  return (
    <>
      <div
        style={{
          marginTop: "4rem",
        }}
      >
        <HeroTitle />
      </div>
    </>
  );
}

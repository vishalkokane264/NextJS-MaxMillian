"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-row main-container">
      <button
        onClick={() => {
          router.push("/auth", { scroll: false });
        }}
      >
        Login
      </button>
    </div>
  );
}

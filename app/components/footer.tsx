"use client";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="flex justify-center gap-4 p-4 bg-blue-100">
      <button
        className="bg-blue-500 text-white px-4 py-rounded hover:bg-blue-700"
        onClick={() => router.push("/contact")}
      >
        Contact Us
      </button>
    </div>
  );
}

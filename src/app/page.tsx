"use client";
import { ModeToggle } from "@/components/mode-toggle";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (user) {
      router.push("dashboard");
    } else {
      isLoaded && router.push("courses");
    }
  }, [user]);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center">
      {/* <div className="absolute">
        <ModeToggle />
      </div> */}
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </main>
  );
}

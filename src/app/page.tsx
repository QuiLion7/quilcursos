"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const { user, isLoaded } = useUser();

  // useEffect(() => {
  //   if (user) {
  //     router.push("dashboard");
  //   } else {
  //     isLoaded && router.push("courses");
  //   }
  // }, [user]);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <div className="absolute left-1 top-0 p-4">
        <ModeToggle />
      </div>
      <div>
        <SignedOut>
          <Button>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <Link href={"/courses"}>
        <Button>Courses</Button>
      </Link>
    </main>
  );
}

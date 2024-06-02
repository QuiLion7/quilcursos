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
      <section className="w-full text-primary-foreground">
        <div className="w-full px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
            <h1 className="flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Invista em quem mais importa.
              <span className="sm:block"> Invista em você. </span>
            </h1>

            <p className="text-secondary-foreground sm:text-xl/relaxed">
              Página em Construção
            </p>

            <div className="flex w-full items-center justify-center gap-4 ">
              <SignedOut>
                <Button>
                  <SignInButton />
                </Button>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <Link href={"/courses"}>
                <Button>Courses</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

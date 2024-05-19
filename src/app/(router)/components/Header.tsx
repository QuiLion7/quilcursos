"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton, useUser } from "@clerk/nextjs";
import { BellDot, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="grid grid-cols-2 bg-background p-4 md:grid-cols-4">
      <Input
        type="text"
        placeholder="Procurar..."
        className=" w-full md:col-span-3"
      />

      <div className="col-span-1 flex w-full items-center justify-end">
        <div className="flex h-full w-full items-center justify-end pr-2">
          <BellDot />
        </div>
        {isLoaded && user ? (
          <UserButton afterSignOutUrl="/courses" />
        ) : (
          <Link href={"/sign-in"}>
            <Button className="w-full uppercase text-primary-foreground">
              Começar
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

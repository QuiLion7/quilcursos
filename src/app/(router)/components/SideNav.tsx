"use client";

import { useUser } from "@clerk/nextjs";
import {
  BadgeCheck,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LayoutGrid,
  Mails,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const SideNav = () => {
  const { user } = useUser();
  const menu = [
    {
      id: 1,
      name: "Meu Painel",
      icon: LayoutDashboard,
      path: "/dashboard",
      auth: user,
    },
    {
      id: 2,
      name: "Todos os Cursos",
      icon: BookOpen,
      path: "/courses",
      auth: true,
    },
    { id: 3, name: "Loja", icon: LayoutGrid, path: "/store", auth: true },
    {
      id: 4,
      name: "Filiação",
      icon: BadgeCheck,
      path: "/membership",
      auth: true,
    },
    {
      id: 5,
      name: "Seja Professor",
      icon: GraduationCap,
      path: "/teacher",
      auth: true,
    },
    { id: 6, name: "Novidades", icon: Mails, path: "/newsletter", auth: true },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex h-screen flex-col border bg-background p-4 shadow-sm">
      <Link
        href={"/"}
        className="mb-4 mt-1 flex w-full items-center justify-center"
      >
        <Image
          src="/logoquil.png"
          width={80}
          height={50}
          alt="logo"
          quality={100}
          priority
          style={{ width: "auto", height: "auto" }}
        />
      </Link>

      <div className="flex flex-col gap-2">
        {menu.map(
          (item) =>
            item.auth && (
              <Link key={item.id} href={item.path}>
                <div
                  className={`group flex cursor-pointer items-center gap-3 rounded-md p-2 text-xl transition-all duration-200 ease-in-out hover:bg-primary/80 hover:text-primary-foreground ${path.includes(item.path) && `bg-primary text-primary-foreground`}`}
                >
                  <item.icon className="group-hover:animate-bounce" />
                  <h2 className="">{item.name}</h2>
                </div>
              </Link>
            ),
        )}
      </div>
    </div>
  );
};

export default SideNav;

import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";

const SideNav = () => {
  const menu = [
    { id: 1, name: "Todos os Cursos", icon: BookOpen },
    { id: 2, name: "Filiação", icon: BadgeIcon },
    { id: 3, name: "Seja Professor", icon: GraduationCap },
  ];
  return (
    <div className="flex h-screen flex-col border bg-primary-foreground p-2 shadow-sm">
      <div className="my-4 flex w-full items-center justify-start">
        <Image
          src="/logoquil.png"
          width={80}
          height={50}
          alt="logo"
          quality={100}
        />
      </div>
      <div className="flex flex-col gap-1">
        {menu.map((item) => (
          <div
            key={item.id}
            className="group flex cursor-pointer items-center gap-3 rounded-md p-2 text-xl text-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground"
          >
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;

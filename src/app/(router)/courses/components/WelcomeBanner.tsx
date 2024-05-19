import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="flex items-center gap-4 rounded-md bg-background p-4">
      <Image
        src="/banner.png"
        width={100}
        height={100}
        alt="boy"
        style={{ width: "auto", height: "auto" }}
      />
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold uppercase text-secondary-foreground">
          Bem Vindo ao <span className="text-primary">QuiLCursos</span>
        </h2>
        <h2 className="text-xl uppercase text-secondary-foreground">
          Aqui você investe em quem mais importa
        </h2>
      </div>
    </div>
  );
};

export default WelcomeBanner;

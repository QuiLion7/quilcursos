import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="flex items-center gap-4 rounded-md bg-primary-foreground p-4">
      <Image src="/banner.png" width={100} height={100} alt="boy" />
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold uppercase">
          Bem Vindo ao <span className="text-primary">QuiLCursos</span>
        </h2>
        <h2 className="text-xl uppercase">
          Aqui você investe em quem mais importa
        </h2>
      </div>
    </div>
  );
};

export default WelcomeBanner;

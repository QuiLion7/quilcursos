import { Button } from "@/components/ui/button";
import React from "react";

const CourseEnrollSection = () => {
  const membership = false;
  return (
    <div className="flex flex-col justify-center rounded-xl bg-primary p-3 text-center">
      <h2 className="mb-2 text-xl font-bold text-primary-foreground">
        Inscreva-se no curso
      </h2>
      {membership && (
        <div className="flex flex-col justify-center gap-3">
          <h2 className="font-light text-primary-foreground">
            Inscreva-se agora para começar a aprender e construir o projeto
          </h2>
          <Button className="uppercase transition-all hover:animate-pulse hover:bg-secondary-foreground hover:text-primary">
            Inscreva-se agora
          </Button>
        </div>
      )}
      {!membership && (
        <div className="flex flex-col justify-center gap-3">
          <h2 className="font-light text-primary-foreground">
            Compre uma assinatura mensal e tenha acesso a todos os cursos
          </h2>
          <Button className="bg-secondary-foreground uppercase hover:bg-pink-600 hover:text-primary-foreground">
            Assine por apenas R$ 20,00
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseEnrollSection;

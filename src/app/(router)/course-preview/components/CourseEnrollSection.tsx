"use client";
import { Button } from "@/components/ui/button";
import { courseLists } from "@/utils/constants";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

interface CourseEnrollSectionProps {
  courseId: string;
}

const CourseEnrollSection: React.FC<CourseEnrollSectionProps> = ({
  courseId,
}) => {
  const course = courseLists.find((course) => course.id === courseId);

  const membership = false;
  const { user } = useUser();

  return (
    <div className="flex flex-col justify-center rounded-xl bg-primary p-3 text-center">
      <h2 className="mb-2 text-xl font-bold text-primary-foreground">
        Inscreva-se no curso
      </h2>
      {user && (membership || course?.free) ? (
        <div className="flex flex-col justify-center gap-3">
          <h2 className="font-light text-primary-foreground">
            Inscreva-se agora para começar a aprender e construir o projeto
          </h2>
          <Button className="bg-background uppercase text-secondary-foreground hover:bg-pink-600 hover:text-primary-foreground">
            Inscreva-se agora
          </Button>
        </div>
      ) : !user ? (
        <div className="flex flex-col justify-center gap-3">
          <h2 className="font-light text-primary-foreground">
            Inscreva-se agora para começar a aprender e construir o projeto
          </h2>
          <Link href={"/sign-in"}>
            <Button className="bg-background uppercase text-secondary-foreground hover:bg-pink-600 hover:text-primary-foreground">
              Inscreva-se agora
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-3">
          <h2 className="font-light text-primary-foreground">
            Compre uma assinatura mensal e tenha acesso a todos os cursos
          </h2>
          <Button className="bg-background uppercase text-secondary-foreground hover:bg-pink-600 hover:text-primary-foreground">
            Assine por apenas R$ 20,00
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseEnrollSection;

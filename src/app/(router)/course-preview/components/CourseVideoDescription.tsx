"use client";

import { courseLists } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface CourseVideoDescriptionProps {
  courseId: string;
}

const CourseVideoDescription: React.FC<CourseVideoDescriptionProps> = ({
  courseId,
}) => {
  const course = courseLists.find((course) => course.id === courseId);
  const [openCollapsible, setOpenCollapsible] = useState(false);

  const [reloadingPage, setReloadingPage] = useState(false);

  useEffect(() => {
    setReloadingPage(true);
  }, []);

  return (
    <div>
      {!course && <div>Curso não encontrado.</div>}

      {course && (
        <div className="flex flex-col justify-start gap-4">
          <h2 className="text-2xl font-semibold">{course.name}</h2>
          <h2 className="text-xl">{course.author}</h2>
          <div className="h-full w-full">
            {reloadingPage && (
              <VideoPlayer videoUrl={course.chapter[0].video.url} />
            )}
          </div>

          <Collapsible open={openCollapsible} onOpenChange={setOpenCollapsible}>
            <CollapsibleTrigger className="flex items-center justify-center gap-2 text-lg font-bold uppercase">
              Sobre este Curso
              {openCollapsible ? <ChevronUp /> : <ChevronDown />}
            </CollapsibleTrigger>
            <CollapsibleContent className="mb-2">
              {course.description}
            </CollapsibleContent>
          </Collapsible>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="message" className="text-base uppercase">
              faça a sua anotação
            </Label>
            <Textarea placeholder="Digite sua anotação aqui." id="message" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseVideoDescription;

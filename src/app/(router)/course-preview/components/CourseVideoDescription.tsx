"use client";
import { courseLists } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";

interface CourseVideoDescriptionProps {
  courseId: string;
}

const CourseVideoDescription: React.FC<CourseVideoDescriptionProps> = ({
  courseId,
}) => {
  const course = courseLists.find((course) => course.id === courseId);

  const [reloadingPage, setReloadingPage] = useState(false);

  useEffect(() => {
    setReloadingPage(true);
  }, []);

  return (
    <div>
      {!course && <div>Curso não encontrado.</div>}

      {course && (
        <div className="flex flex-col justify-start gap-2">
          <h2 className="text-2xl font-semibold">{course.name}</h2>
          <h2 className="text-xl">{course.author}</h2>
          <div className="h-full w-full">
            {reloadingPage && (
              <VideoPlayer videoUrl={course.chapter[0].video.url} />
            )}
          </div>
          <h2>Sobre este Curso</h2>
          <Markdown className="text-lg font-light leading-7">
            {course.description}
          </Markdown>
        </div>
      )}
    </div>
  );
};

export default CourseVideoDescription;

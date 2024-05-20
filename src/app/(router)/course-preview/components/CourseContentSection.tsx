"use client";
import { courseLists } from "@/utils/constants";
import { Lock, Play } from "lucide-react";
import React, { useState } from "react";

interface CourseContentSectionProps {
  courseId: string;
}

const CourseContentSection: React.FC<CourseContentSectionProps> = ({
  courseId,
}) => {
  const course = courseLists.find((course) => course.id === courseId);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex w-full flex-col justify-center gap-3 rounded-xl bg-background p-3">
      <h2>Conteúdo</h2>
      {course?.chapter.map((item, index) => (
        <div
          key={index}
          className="rounded-xl hover:bg-primary/70 hover:text-secondary-foreground"
        >
          <h2
            className={`flex cursor-pointer items-center justify-between rounded-xl border px-3 py-2 text-base  ${activeIndex == index && "bg-primary font-semibold text-primary-foreground"}`}
          >
            {index + 1}. {item.name}
            {activeIndex == index ? (
              <Play className="h-4 w-4" />
            ) : (
              <Lock className="h-4 w-4" />
            )}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CourseContentSection;

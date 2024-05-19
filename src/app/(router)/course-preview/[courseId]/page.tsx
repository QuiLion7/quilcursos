import React from "react";
import CourseVideoDescription from "../components/CourseVideoDescription";
import CourseEnrollSection from "../components/CourseEnrollSection";
import CourseContentSection from "../components/CourseContentSection";

const CoursePreview = ({ params }: { params: { courseId: string } }) => {
  return (
    <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-3">
      <div className="col-span-2 rounded-xl bg-primary-foreground p-4">
        <CourseVideoDescription courseId={params.courseId} />
      </div>

      <div className="flex flex-col gap-4">
        <CourseEnrollSection courseId={params.courseId} />
        <CourseContentSection courseId={params.courseId} />
      </div>
    </div>
  );
};

export default CoursePreview;

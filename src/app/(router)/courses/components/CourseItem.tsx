import { PropsCourses, courseLists } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseItem = () => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {courseLists.map((course, index) => (
        <Link key={index} href={`/course-preview/${course.id}`}>
          <div className="flex h-full cursor-pointer flex-col gap-1 rounded-xl border hover:shadow-md hover:shadow-primary">
            <Image
              src={course?.banner?.url}
              width={500}
              height={450}
              alt="banner"
              className="w-full rounded-t-xl"
            />
            <div className="flex flex-col  gap-1 p-2">
              <h2 className="text-base font-semibold sm:text-xl">
                {course.name}
              </h2>
              <h2 className="text-sm text-secondary-foreground sm:text-base">
                {course.author}
              </h2>
              {course?.chapter?.length == 0 ? (
                <div className="flex gap-2">
                  <Image
                    src="/capitulo.png"
                    alt="logo capitulo"
                    quality={100}
                    priority
                    width={25}
                    height={20}
                    style={{ width: "auto", height: "auto" }}
                  />
                  <h2 className="text-xs text-secondary-foreground sm:text-lg">
                    Assistir Aulas
                  </h2>
                </div>
              ) : (
                <div className="flex items-center justify-start gap-2">
                  <Image
                    src="/youtube.png"
                    alt="logo youtube"
                    quality={100}
                    priority
                    width={25}
                    height={20}
                    style={{ width: "auto", height: "auto" }}
                  />
                  <h2 className="text-xs text-secondary-foreground sm:text-lg">
                    Assistir no Youtube
                  </h2>
                </div>
              )}

              <div className=" text-sm font-medium text-secondary-foreground ">
                {course.free ? "Gratuito" : "Pago"}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseItem;

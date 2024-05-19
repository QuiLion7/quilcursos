import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
import { courseLists } from "@/utils/constants";

const CourseList = () => {
  return (
    <div className="rounded-md bg-background p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-secondary-foreground">
          Todos os Cursos
        </h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtro" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Tudo</SelectItem>
            <SelectItem value="pago">Pago</SelectItem>
            <SelectItem value="gratuito">Gratuito</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-full">
        {/* {courseLists.map((item, index) => (
          <div key={index}>
            <CourseItem item={item}/>
          </div>
        ))} */}
        <CourseItem />
      </div>
    </div>
  );
};

export default CourseList;

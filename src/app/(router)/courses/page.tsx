import CourseList from "./components/CourseList";
import SideBanners from "./components/SideBanners";
import WelcomeBanner from "./components/WelcomeBanner";

export default function Courses() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-4">
      <div className="col-span-3 flex flex-col gap-4">
        <WelcomeBanner />
        <CourseList />
      </div>
      <div className="flex w-full items-start justify-center rounded-xl bg-background p-4">
        <SideBanners />
      </div>
    </div>
  );
}

import WelcomeBanner from "./components/WelcomeBanner";

export default function Courses() {
  return (
    <div className="grid grid-cols-1 p-4 md:grid-cols-3">
      <div className="col-span-2">
        <WelcomeBanner />
      </div>
      <div>lado direito</div>
    </div>
  );
}

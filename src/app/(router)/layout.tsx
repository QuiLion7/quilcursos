import type { Metadata } from "next";
import SideNav from "./components/SideNav";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "QuiLCursos",
  description: "Mais do que Cursos",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="fixed sm:block sm:w-64">
        <SideNav />
      </div>
      <div className="ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}

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
    <div className="bg-secondary">
      <div className="fixed w-[70px] sm:w-60">
        <SideNav />
      </div>
      <div className="ml-[70px] sm:ml-60">
        <Header />
        {children}
      </div>
    </div>
  );
}

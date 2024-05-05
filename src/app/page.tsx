import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute">
        <ModeToggle />
      </div>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BellDot, Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-primary-foreground p-4">
      <Input type="text" placeholder="Procurar..." className="flex-2" />
      <div className="ml-4 flex w-full flex-1 items-center justify-end gap-2">
        <BellDot className="h-full w-auto" />
        <Button>Vamos Começar</Button>
      </div>
      <div className="flex "></div>
    </div>
  );
};

export default Header;

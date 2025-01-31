import Link from "next/link";
import { MenuIcon, PanelsTopLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Menu from "@/components/dashboard/menu";
import { Sheet, SheetHeader, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const SheetMenu = () => (
  <Sheet>
    {/* Botão para abrir o menu no modo mobile */}
    <SheetTrigger className="lg:hidden" asChild>
      <Button className="h-8" variant="outline" size="icon">
        <MenuIcon size={20} />
      </Button>
    </SheetTrigger>

    {/* Conteúdo do menu lateral */}
    <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
      <SheetHeader>
        {/* Link para o dashboard dentro do menu */}
        <Button className="flex justify-center items-center pb-2 pt-1" variant="link" asChild>
          <Link href="/dashboard" className="flex items-center gap-2">
            <PanelsTopLeft className="w-6 h-6 mr-1" />
            <SheetTitle className="font-bold text-lg">Brand</SheetTitle>
          </Link>
        </Button>
      </SheetHeader>

      {/* Renderiza o menu lateral aberto */}
      <Menu isOpen />
    </SheetContent>
  </Sheet>
);

export default SheetMenu;

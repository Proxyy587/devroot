import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, Package2 } from "lucide-react";
import { dashboardSidebar } from "@/constants";
import { Avatar } from "@/components/ui/avatar";

// Array to store navigation items
const MobileSidebar = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="mt-6 grid gap-4 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold text-primary"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {dashboardSidebar.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 rounded-lg px-3 py-2 transition-colors hover:bg-muted"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-4">
            <Button className="hover:bg-primary-dark w-full bg-primary text-white">
              Logout
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex-1" />
      <div className="flex items-center">
        <Avatar />
      </div>
    </header>
  );
};

export default MobileSidebar;

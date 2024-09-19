import { Metadata } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Devroots",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen">
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat blur-sm filter"
        style={{ backgroundImage: "url('/wallpaper.jpg')" }}
      />
      <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative flex w-full max-w-7xl flex-col items-center rounded-xl bg-white p-4 shadow-lg lg:flex-row lg:p-6">
          <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
            <Link href="http://localhost:3000">
              <Button
                variant={"ghost"}
                className="absolute left-6 top-5 flex items-center justify-center"
              >
                <ArrowLeft className="h-4 w-4" /> back
              </Button>
            </Link>
            {/* Left Side - Form */}
            <div className="flex w-full flex-col items-center justify-center p-4 lg:p-12">
              <div className="w-full max-w-md">{children}</div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden w-full lg:block lg:w-1/2">
            <Image
              src="/unnamed.png"
              alt="Illustration"
              width={600}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

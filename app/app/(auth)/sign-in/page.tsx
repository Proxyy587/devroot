import Image from "next/image";
import LoginButton from "./login-button";
import { Suspense } from "react";
import { Icons } from "@/components/ui/icons";

export default function LoginPage() {
  return (
    <div className="mx-5 border border-stone-200 py-10 dark:border-stone-700 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:shadow-md">
      <Icons.logo
        width={250}
        height={100}
        className="relative mx-auto w-auto dark:scale-110 dark:rounded-full dark:border dark:border-stone-400"
      />
      <p className="mt-2 text-center text-sm text-stone-600 dark:text-stone-400">
        Login with your github to continue with devroots
      </p>

      <div className="mx-auto mt-4 w-11/12 max-w-xs sm:w-full">
        <Suspense
          fallback={
            <div className="my-2 h-10 w-full rounded-md border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800" />
          }
        >
          <LoginButton />
        </Suspense>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function LoginButton() {
  const [loading, setLoading] = useState(false);

  // Get error message added by next/auth in URL.
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  useEffect(() => {
    const errorMessage = Array.isArray(error) ? error.pop() : error;
    errorMessage && toast.error(errorMessage);
  }, [error]);

  return (
    <Button
      variant={"outline"}
      disabled={loading}
      onClick={() => {
        setLoading(true);
        signIn("github");
      }}
      className={`${
        loading
          ? "cursor-not-allowed bg-stone-50 dark:bg-stone-800"
          : "bg-white hover:bg-stone-50 active:bg-stone-100 dark:bg-black dark:hover:border-white dark:hover:bg-black"
      } group my-2 flex h-10 w-full items-center justify-center space-x-2 rounded-md transition-colors duration-75 focus:outline-none dark:border-stone-700`}
    >
      {loading ? (
        <Icons.spinner className="h-5 w-5 animate-spin duration-500" />
      ) : (
        <>
          <Icons.gitHub className="h-5 w-5" />
          <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
            Continue with GitHub
          </p>
        </>
      )}
    </Button>
  );
}

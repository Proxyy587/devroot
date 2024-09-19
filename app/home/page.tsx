import { InlineSnippet } from "@/components/form/domain-config";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10">
      <Icons.logo width={512} height={120} className="w-96 object-cover" />
      <h1 className="text-sm">
        welcome to{" "}
        <InlineSnippet className="ml-2 bg-muted">Devroots</InlineSnippet>
      </h1>
      <Button className="rounded-full">
        <Link href="http://app.localhost:3000">Create your account</Link>
      </Button>
    </div>
  );
}

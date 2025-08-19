import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Logo2 from "@/public/logo2.png";
import IconButton from "@/components/elements/IconButton";
import { PenBox } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserMenu from "@/components/templates/UserMenu";

export default function Header() {
  return (
    <header className="mx-auto container">
      <nav className="py-6 px-4 flex items-center justify-between">
        <Link href="/" className="text-blue-500 hover:underline">
          <Image
            src={Logo2}
            alt="Zscrum logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center gap-x-4">
          <Link href="/project/create">
            <IconButton
              title="Create Project"
              icon={<PenBox className="h-18 w-18" />}
            />
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

import Image from "next/image";
import Logo2 from "@/public/logo2.png";
import Link from "next/link";
import IconButton from "@/components/elements/IconButton";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Streamline Your Workflow <br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            with{" "}
            <Image
              src={Logo2}
              alt="logo"
              height={80}
              width={400}
              className="h-14 sm:h-24 w-auto object-contain"
            />{" "}
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Empower your team with our intutive project management solution.
        </p>
        <div className="flex items-center gap-x-2 justify-center">
          <Link href="/onboarding">
            <IconButton
              title="Get Started"
              icon={<ChevronRight className="h-18 w-18" />}
              className="mr-2"
              size="lg"
              reverse
            />
          </Link>
          <Link href="#features">
            <Button className="mr-4" size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

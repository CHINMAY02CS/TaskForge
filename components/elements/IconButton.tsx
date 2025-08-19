import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export default function IconButton({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <Button variant="destructive" className="flex items-center gap-x-2">
      {icon}
      {title}
    </Button>
  );
}

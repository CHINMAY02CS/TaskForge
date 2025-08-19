import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IconButtonProps extends ButtonProps {
  icon: ReactNode;
  title: string;
  className?: string;
  reverse?: boolean;
}

export default function IconButton({
  icon,
  title,
  className = "",
  size = "default",
  reverse = false,
  ...rest
}: IconButtonProps) {
  return (
    <Button
      size={size}
      className={cn("flex items-center gap-x-2", className)}
      {...rest} // ✅ spreads variant, onClick, etc.
    >
      {reverse ? (
        <>
          {title}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {title}
        </>
      )}
    </Button>
  );
}

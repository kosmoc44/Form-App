import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { VariantProps } from "class-variance-authority";
import { Button } from "@/components/ui/button";

type Props = Partial<VariantProps<typeof Button>> & {
  Icon: LucideIcon;
  className?: string;
};

function IconButton({ Icon, className, ...props }: Props) {
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      className={cn("text-neutral-600", className)}
      {...props}
    >
      <Icon />
    </Button>
  );
}

export default IconButton;
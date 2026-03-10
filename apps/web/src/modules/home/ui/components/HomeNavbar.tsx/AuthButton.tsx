import { authClient } from "@MyApp/auth/client";
import { Button } from "@repo/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";
import { ChevronDown, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

function AuthButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const sessionQuery = authClient.useSession?.();
  const user = sessionQuery?.data?.user;
  const displayName = user?.name ?? user?.email ?? "Account";

  const onLogout = () => {
    startTransition(async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => router.push("/"),
        },
      });
    });
  };

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-9 max-w-56 justify-start gap-2 px-2"
            disabled={isPending}
          >
            <span className="truncate text-sm font-medium">{displayName}</span>
            <ChevronDown className="text-muted-foreground size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="truncate">
            {user?.email ?? displayName}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onSelect={onLogout}>
            <LogOut />
            {isPending ? "Signing out..." : "Sign out"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
export default AuthButton;

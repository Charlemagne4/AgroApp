"use client";
import { LoginForm } from "@repo/ui/components/login-form";
import { useRouter } from "next/navigation";
function LoginView() {
  const router = useRouter();
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm onNavigate={(path: string) => router.push(path)} />
      </div>
    </div>
  );
}
export default LoginView;

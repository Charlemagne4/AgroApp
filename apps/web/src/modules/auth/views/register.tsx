"use client";
import { SignupForm as RegisterForm } from "@repo/ui/components/signup-form";
import { useRouter } from "next/navigation";
function RegisterView() {
  const router = useRouter();
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <RegisterForm onNavigate={(path: string) => router.push(path)} />
      </div>
    </div>
  );
}
export default RegisterView;

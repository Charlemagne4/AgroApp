"use client";

import * as React from "react";
import { SidebarTrigger } from "@repo/ui/components/sidebar";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "./AuthButton";

function HomeNavbar() {
  return (
    <nav className="bg-background/80 ps2 fixed top-0 right-0 left-0 z-50 flex h-16 items-center ps-2 pr-5">
      <div className="flex w-full items-center justify-between gap-4">
        {/* Menu and logo */}
        <div className="flex shrink-0 items-center">
          <SidebarTrigger />
          <Link prefetch href={"/"} className="hidden md:block">
            <div className="flex items-center gap-1 p-4">
              <Image alt="logo" src={"/logo.png"} width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">
                Agriculture de demain
              </p>
            </div>
          </Link>
        </div>

        <AuthButton />
      </div>
    </nav>
  );
}
export default HomeNavbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export default function NavLink({
  href,
  children,
  className,
  activeClassName,
}: NavLinkProps) {
  const pathname = usePathname();
  
  // Normalize paths by removing trailing slashes for comparison
  const normalizedHref = href.replace(/\/$/, "") || "/";
  const normalizedPathname = pathname.replace(/\/$/, "") || "/";
  
  const isActive =
    normalizedPathname === normalizedHref ||
    (normalizedHref !== "/" && normalizedPathname.startsWith(normalizedHref + "/"));

  return (
    <Link
      href={href}
      className={cn(className, isActive && activeClassName)}
    >
      {children}
    </Link>
  );
}

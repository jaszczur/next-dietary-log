"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { PropsWithChildren } from "react";

export function NavButton({
  className,
  href,
  children,
}: PropsWithChildren<{ className?: string; href: string }>) {
  const segment = useSelectedLayoutSegment();
  console.log({ segment, href });
  const currentPage =
    `/${segment}` === href || (segment === null && href === "/");
  const activeClass = currentPage ? "btn-outline" : "btn-ghost";
  return (
    <Link href={href} className={`btn ${activeClass} ${className}`}>
      {children}
    </Link>
  );
}

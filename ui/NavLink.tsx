"use client";

import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({
  href,
  children,
  className,
  prefix = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: (active: boolean) => string;
  prefix: string;
}) {
  const segment = useSelectedLayoutSegment();
  const active = segment ? `${prefix}/${segment}` === href : prefix === href;

  return (
    <Link
      href={href}
      className={className ? className(active) : ""}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

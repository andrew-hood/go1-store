"use client";

import { MDXProvider } from "@mdx-js/react";
import React, { PropsWithChildren } from "react";

export default function DocumentationLayout({ children }: PropsWithChildren) {
  return <MDXProvider>{children}</MDXProvider>;
}

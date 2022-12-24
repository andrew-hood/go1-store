import React from "react";
import Documentation from "@ui/Documentation";

export default function DocumentationPage() {
  return (
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <Documentation />
        <Documentation />
      </div>
    </div>
  );
}

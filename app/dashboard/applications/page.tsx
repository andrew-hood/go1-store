import React from "react";
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

const actions = [
  {
    title: "Request time off",
    href: "/dashboard/applications/123",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Benefits",
    href: "#",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Schedule a one-on-one",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
];

export default function DashboardApplicationsPage() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-eden-500"
        >
          <div>
            <span
              className={clsx(
                action.iconBackground,
                action.iconForeground,
                "rounded-lg inline-flex p-3 ring-4 ring-white"
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <Link href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Doloribus dolores nostrum quia qui natus officia quod et dolorem.
              Sit repellendus qui ut at blanditiis et quo et molestiae.
            </p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}

"use client";

import { PropsWithChildren, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Dialog } from "@headlessui/react";

import "../globals.css";
import Cloud from "@ui/Cloud";

const navigation = [
  { name: "Showcase", href: "/showcase" },
  { name: "Developer", href: "/developer" },
  { name: "Documentation", href: "/documentation" },
];

export default function RootLayout({ children }: PropsWithChildren) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="isolate bg-white">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <Cloud className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" />
          </div>
          <div className="px-6 py-6 lg:px-8">
            <div>
              <nav
                className="flex h-9 items-center justify-between"
                aria-label="Global"
              >
                <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="text-eden-600 font-bold">Go1</span>&nbsp;
                    Store
                  </Link>
                </div>
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="font-semibold text-gray-900 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                  <Link
                    href="/login"
                    className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Log in
                  </Link>
                </div>
              </nav>
              <Dialog
                as="div"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
              >
                <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                  <div className="flex h-9 items-center justify-between">
                    <div className="flex">
                      <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                          className="h-8"
                          src="https://tailwindui.com/img/logos/mark.svg?color=eden&shade=600"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="flex">
                      <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="py-6">
                        <Link
                          href="/login"
                          className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                        >
                          Log in
                        </Link>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Dialog>
            </div>
          </div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

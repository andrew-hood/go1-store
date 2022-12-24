import Cloud from "@ui/Cloud";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="text-gray-600">
                Check out our brand new documentation.{" "}
                <a
                  href="/documentation"
                  className="font-semibold text-eden-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
              Build <span className="text-green-yellow-600">Powerful</span> Go1
              apps for your Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
              Elevate your business with custom Go1 apps designed for maximum
              efficiency and productivity.
            </p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <Link
                href="/showcase"
                className="inline-block rounded-lg bg-green-yellow-500 px-4 py-1.5 text-base font-semibold leading-7 text-eden-600 shadow-sm ring-1 ring-green-yellow-600 hover:bg-green-yellow-600 hover:ring-green-yellow-700"
              >
                Browse integrations
              </Link>
              <Link
                href="/developer"
                className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Build your own
                <span className="text-gray-400" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <Cloud className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";
import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const features = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: BoltIcon,
  },
  {
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: DevicePhoneMobileIcon,
  },
];

const featureImages = [
  [
    "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    "https://images.unsplash.com/photo-1574192323942-cec035ad64f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1510674485131-dc88d96369b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=949&q=80",
    "https://images.unsplash.com/photo-1529338296731-c4280a44fc48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1573643808568-4a3c26f3a06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1491947153227-33d59da6c448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  ],
];

export default function DeveloperPage() {
  return (
    <>
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Become a developer today
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Get started using the Go1 API with easy tools and unleash your
              learning apps to the world.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {featureImages.map((col, colIndex) => (
                      <div
                        key={`col-${colIndex}`}
                        className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                      >
                        {col.map((image, imageIndex) => (
                          <div
                            key={`image-${colIndex}-${imageIndex}`}
                            className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                          >
                            <Image
                              src={image}
                              width={176}
                              height={256}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/login"
                className="inline-block rounded-md border border-transparent bg-green-yellow-500 py-3 px-8 text-center font-medium text-eden-600 hover:bg-green-yellow-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32 lg:py-40 lg:pt-72">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-eden-600">
              Transactions
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A better way to send money
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-eden-500 text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-gray-900">
                      {feature.name}
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section aria-labelledby="cta-heading">
        <div className="overflow-hidden pt-32 sm:pt-14">
          <div className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative pt-48 pb-16 sm:pb-24">
                <div>
                  <h2
                    id="cta-heading"
                    className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                  >
                    Create your
                    <br />
                    first application
                  </h2>
                  <div className="mt-6 text-base">
                    <Link href="/login" className="font-semibold text-white">
                      Get started for free
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>

                <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                  <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src="https://images.unsplash.com/photo-1556559322-b5071efadc88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
                          alt=""
                          width={256}
                          height={256}
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80"
                          alt=""
                          width={256}
                          height={256}
                        />
                      </div>
                    </div>
                    <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src="https://images.unsplash.com/photo-1552581466-ac9fec8dd978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                          alt=""
                          width={256}
                          height={256}
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                          alt=""
                          width={256}
                          height={256}
                        />
                      </div>
                    </div>
                    <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src="https://images.unsplash.com/photo-1558274803-5addf237d6dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                          alt=""
                          width={256}
                          height={256}
                        />
                      </div>

                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src="https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                          alt=""
                          width={256}
                          height={256}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

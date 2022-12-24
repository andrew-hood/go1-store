import Link from "next/link";
import React from "react";
import PocketBase from "pocketbase";

export default async function ShowcasePage() {
  const pb = new PocketBase("https://go1-store.fly.dev");
  const integrations = await pb.collection("integrations").getList(1, 50);

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden sm:flex sm:flex-col"
      >
        <div className="h-32 w-full md:h-40 lg:h-48" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col sm:hidden"
        >
          <div className="h-48 w-full bg-white" />
        </div>
        <div className="relative py-32 text-black">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Third Party Integrations
          </h1>
          <div className="mt-4 sm:mt-6">
            <p className="text-md">
              Integrate a pre-built solution into your portal
            </p>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="collection-heading"
        className="relative -mt-96 sm:mt-0"
      >
        <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:px-6 lg:gap-x-8 lg:px-8">
          {integrations.items.map((integration) => (
            <Integration key={integration.id} integration={integration} />
          ))}
        </div>
      </section>
    </div>
  );
}

const Integration = ({ integration: { id, name, feature_image } }: any) => {
  return (
    <div className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-w-4 sm:aspect-h-5 sm:h-auto">
      <div>
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden rounded-lg"
        >
          <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
            <img
              src={`https://go1-store.fly.dev/api/files/integrations/${id}/${feature_image}?thumb=100x300`}
              alt={name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
        </div>
        <div className="absolute inset-0 flex items-end rounded-lg p-6">
          <div>
            <p aria-hidden="true" className="text-sm text-white">
              Application
            </p>
            <h3 className="mt-1 font-semibold text-white">
              <Link href={`/showcase/${id}`}>
                <span className="absolute inset-0" />
                {name}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

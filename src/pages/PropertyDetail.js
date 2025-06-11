import React from "react";
import { useParams, Link } from "react-router-dom";
import { listings } from "./PropertiesPage"; // re‑use the same data source

export default function PropertyDetail() {
    const { id } = useParams();
    const index = parseInt(id, 10);
    const listing = listings[index];

    if (!listing) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
                <h1 className="mb-4 text-3xl font-bold">Listing Not Found</h1>
                <Link to="/properties" className="text-indigo-600 underline">
                    Back to all properties
                </Link>
            </main>
        );
    }

    return (
        <main className="mx-auto max-w-5xl space-y-10 px-4 py-12">
            <Link to="/properties" className="text-indigo-600 hover:underline">
                ← Back to all properties
            </Link>

            <header className="space-y-4 text-center">
                <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                    {listing.name}
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-700">
                    {listing.description}
                </p>
            </header>

            {/* All images grid */}
            <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {listing.images.map((src) => (
                    <img
                        key={src}
                        src={src}
                        alt="property"
                        className="aspect-[4/3] w-full rounded-xl object-cover shadow"
                    />
                ))}
            </section>
        </main>
    );
}

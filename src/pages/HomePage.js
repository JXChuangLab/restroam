import React from "react";

export default function HomePage() {
    return (
        <main className="font-sans antialiased text-gray-800">
            {/* Hero */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <img
                    //src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1870&q=80"
                    src="/img/home/home_page.JPG"
                    alt="Luxury bedroom"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/10" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <h1 className="mb-4 max-w-3xl text-4xl font-bold md:text-5xl lg:text-6xl">
                        Where sojourns transcend accommodation
                    </h1>
                    <p className="max-w-xl text-lg md:text-xl lg:text-2xl">
                        We craft spaces with architectural vision, deliver platinum hospitality,
                        and uphold a white‑glove move‑out cleaning standard.
                    </p>
                </div>
                {/* Floating stats */}
                <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/90 px-6 py-2 text-sm font-semibold shadow backdrop-blur-md">
                    98.7% customer satisfaction | 100% cleanliness compliance rate
                </div>
            </section>

            {/* Features */}
            <section className="mx-auto -mt-12 max-w-6xl space-y-16 px-4 pb-24 lg:-mt-20 lg:space-y-24">
                {/* Refined Property Curation */}
                <FeatureBlock
                    title="Refined Property Curation"
                    items={[
                        {
                            heading: "Architect‑Led Space Renovation",
                            body: "Thoughtfully redesigned by professional architects for comfort and aesthetics.",
                        },
                        {
                            heading: "Luxury Hotel Bedding Standards",
                            body: "Premium bedding linens and bath towels, meeting international five‑star hotel specifications.",
                        },
                        {
                            heading: "Smart Home System Coverage",
                            body: "Fully integrated smart home technology for seamless control of lighting, climate, and security.",
                        },
                    ]}
                />
                {/* Elite Concierge Corp */}
                <FeatureBlock
                    title="Elite Concierge Corp"
                    items={[
                        {
                            heading: "Bilingual Services (English / Chinese)",
                            body: "Dedicated support in both English and Chinese for smooth communication.",
                        },
                        {
                            heading: "Instant Response to Inquiries",
                            body: "Fast and friendly replies to all guest messages.",
                        },
                        {
                            heading: "Customised Local Experiences",
                            body: "Personalised recommendations and bookings for cultural activities, dining, and more.",
                        },
                    ]}
                />
                {/* Move‑In Level Cleaning System */}
                <FeatureBlock
                    title="Move‑In Level Cleaning System"
                    items={[
                        {
                            heading: "Comprehensive Check‑Out Cleaning Protocol",
                            body: "Detailed cleaning checklist ensures every corner is spotless before your arrival.",
                        },
                        {
                            heading: "6‑Step Deep Sanitisation Process",
                            body: "From surface disinfection to air purification — ensuring a hygienic and healthy environment.",
                        },
                        {
                            heading: "Hypoallergenic Options Available",
                            body: "Specialised non‑allergen cleaning protocols for guests with sensitivities or allergies.",
                        },
                    ]}
                />

                {/* Accolades */}
                <div className="grid gap-6 text-center md:grid-cols-3">
                    {[
                        "Airbnb Super Host",
                        "Booking.com Premier Host",
                        "ATEC Quality Endorsed",
                    ].map((badge) => (
                        <div
                            key={badge}
                            className="rounded-xl bg-indigo-50 px-4 py-6 text-indigo-700 shadow-sm"
                        >
                            ✓ {badge}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

/* -------------------------------------------------- */
function FeatureBlock({ title, items }) {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                {title}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
                {items.map(({ heading, body }) => (
                    <div
                        key={heading}
                        className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
                    >
                        <h3 className="mb-2 text-lg font-semibold text-indigo-600">
                            ▸ {heading}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                            {body}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

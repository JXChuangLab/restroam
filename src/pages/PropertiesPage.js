import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* -------------------------------------------------------------------------
  Responsive, visually varied property showcase — syntax‑clean version.
  • Alternating layout (image left / right)
  • Aspect‑ratio box to harmonise mixed‑height photos
  • Auto / manual carousel controls
---------------------------------------------------------------------------*/

export const listings = [
    {
        name: "Airportside Dual-Bed Haven",
        blurb:
            "A 6‑minute drive from the international airport cuts transit fatigue for red‑eye fliers…",
        description: `A 6-minute drive from the international airport cuts transit fatigue for red-eye fliers. The master bedroom’s Queen bed and second bedroom’s Double bed (plus living room sofa bed) sleep up to 5 guests. Freshly installed soundproof windows neutralize flight path noise, while modern furnishings create clutter-free comfort. Strategic location bridges business needs (18 mins to CBD) and leisure urges (12 mins to casinos).
                        A 24/7 convenience store and laundromat sit within an 8-minute walk, paired with reliable Wi-Fi and a coffee-ready kitchenette. Whether pre-dawn airport sprints or multi-gen family layovers, this space delivers calibrated efficiency: minimalist design eliminates friction, core amenities target traveler pain points.`,
        images: [
            "/img/Airportside/image_1.png",
            "/img/Airportside/image_2.png",
            "/img/Airportside/image_3.png",
            "/img/Airportside/image_4.png",
            "/img/Airportside/image_5.png",
            "/img/Airportside/image_6.png",
        ],
    },
    {
        name: "Tranquil Transit Lodge",
        blurb:
            "Soundproof windows absorb flight noise while high‑speed Wi‑Fi maintains productivity…",

        description: `A 6-minute airport transfer slashes travel fatigue for late arrivals or dawn departures. The master bedroom’s Queen bed and secondary Double bed (plus living room sofa bed) sleep 5 guests, with freshly furnished interiors radiating clutter-free comfort. Strategic location bridges business needs (18-minute CBD drive) and leisure escapes (12 minutes to entertainment zones).
                    Soundproof windows absorb flight noise while high-speed Wi-Fi maintains productivity. An 8-minute walk reaches 24/7 convenience stores and laundry services, with a functional kitchenette for quick meals. Designed as a frictionless hub: minimalist amenities target transit essentials, offering solo travelers and families a stress-free reset point between journeys.`,
        images: [
            "/img/Tranquil/image_1.png",
            "/img/Tranquil/image_2.png",
            "/img/Tranquil/image_3.png",
            "/img/Tranquil/image_4.png",
            "/img/Tranquil/image_5.png",
            "/img/Tranquil/image_6.png",
        ],
    },
    {
        name: "Airport Proximity Hub",
        blurb:
            "24/7 self‑check‑in smoothes late arrivals, blackout curtains optimise jet‑lag recovery…",

        description: `6 minutes from the international airport erases transit fatigue, whether catching dawn flights or arriving past midnight. The Queen-bed master room and Double-bed second room (plus sofa bed) sleep 5 guests, with soundproof windows buffering aircraft noise. Fresh minimalist furnishings create clutter-free comfort, while 12-minute casino access and 18-minute CBD drives blend business-leisure needs.
                    24/7 self-check-in smoothes late arrivals, and walkable eateries/stores handle forgotten essentials. High-speed Wi-Fi powers remote work, and blackout curtains optimize jet lag recovery. A strategic basecamp for layover crews and family stopovers, delivering airport adjacency without urban clamor.`,

        images: [
            "/img/AirportProximity/image_1.png",
            "/img/AirportProximity/image_2.png",
            "/img/AirportProximity/image_3.png",
            "/img/AirportProximity/image_4.png",
            "/img/AirportProximity/image_5.png",
            "/img/AirportProximity/image_6.png",
        ],
    },
    {
        name: "Airport Serenity Hub",
        blurb:
            "Two bedrooms with Queen & Double beds plus sofa bed sleep 5 guests, all‑new furnishings ensure sanitised comfort…",

        description: `Two bedrooms with Queen & Double beds plus sofa bed sleep 5 guests, all-new furnishings ensure sanitized comfort. A 6-minute airport transfer eliminates transit stress, with soundproof windows neutralizing flight noise and 24/7 self-check-in for late arrivals.
                    Surrounded by walkable dining/shopping options and equipped with kitchen essentials + high-speed Wi-Fi. Optimized for efficiency: 8-minute dawn airport dashes, 10-minute midnight check-ins, and seamless access to both business hubs (18-minute drive) and leisure zones. A tranquil basecamp balancing urban access with restorative quiet.`,

        images: [
            "/img/AirportSerenity/image_1.png",
            "/img/AirportSerenity/image_2.png",
            "/img/AirportSerenity/image_3.png",
            "/img/AirportSerenity/image_4.png",
            "/img/AirportSerenity/image_5.png",
            "/img/AirportSerenity/image_6.png",
        ],
    },
    {
        name: "Urban Sky Escape",
        blurb:
            "The skylight above the living area dynamically adjusts daylight ambience, while the rooftop terrace offers a minimalist urban retreat…",

        description: `This 2-bedroom apartment accommodates 6 guests with a queen bed, bunk beds, and a fold-out sofa bed. The skylight above the living area dynamically adjusts daylight ambiance, while the rooftop terrace offers a minimalist urban retreat with lounge seating—perfect for capturing sunrise hues or sunset panoramas. An on-site gym provides treadmills and resistance machines for casual workouts.
                    Centrally located with seamless access to dining hubs and transit routes, the space balances city energy with residential calm. The bathroom’s practical layout supports group use, and the equipped kitchen simplifies meal preparation. Soundproof windows and blackout curtains ensure restful stays, ideal for families blending urban exploration with downtime.`,

        images: [
            "/img/UrbanSky/image_1.png",
            "/img/UrbanSky/image_2.png",
            "/img/UrbanSky/image_3.png",
            "/img/UrbanSky/image_4.png",
            "/img/UrbanSky/image_5.png",
            "/img/UrbanSky/image_6.png",
            "/img/UrbanSky/image_7.png",
            "/img/UrbanSky/image_8.png",
        ],
    },
];

export default function PropertiesPage() {
    return (
        <main className="mx-auto max-w-6xl space-y-20 px-4 py-14 lg:space-y-24">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                    Our Curated Stays
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                    Each residence blends architectural vision with platinum hospitality —
                    hand‑picked for discerning travellers.
                </p>
            </header>

            {listings.map((listing, i) => (
                <PropertyCard key={listing.name} index={i} {...listing} />
            ))}
        </main>
    );
}

/* -------------------------------------------------------------------------
 * Property card
 * --------------------------------------------------------------------- */
function PropertyCard({ index, name, blurb, images }) {
    const [idx, setIdx] = useState(0);

    // auto‑rotate every 5 s
    useEffect(() => {
        const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 5000);
        return () => clearInterval(t);
    }, [images.length]);

    // Alternate layout: even = img left, odd = img right
    const reverse = index % 2 === 1;

    return (
        <article
            className={`flex flex-col items-center gap-10 md:flex-row ${reverse ? "md:flex-row-reverse" : ""} lg:gap-14`}
        >
            {/* Carousel */}
            <div className="relative w-full md:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    {images.map((src, i) => (
                        <img
                            key={src}
                            src={src}
                            alt="room preview"
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
                        />
                    ))}
                </div>

                {/* Indicators */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 space-x-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIdx(i)}
                            className={`h-2.5 w-2.5 rounded-full border transition ${i === idx ? "bg-indigo-600" : "bg-white/80 hover:bg-white"}`}
                        />
                    ))}
                </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl">
                    {name}
                </h2>
                <p className="mt-4 text-gray-700 lg:text-lg">{blurb}</p>
                <Link to={`/properties/${index}`}>
                    <button className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white shadow transition hover:bg-indigo-700 active:scale-95">
                        View Details
                    </button>
                </Link>
            </div>
        </article>
    );
}

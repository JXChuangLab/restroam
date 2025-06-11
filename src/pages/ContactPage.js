export default function ContactPage() {
    return (
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center space-y-8 px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Contact & Booking</h1>

            <p className="max-w-xl text-lg text-gray-700">
                Reach out to our bilingual concierge team for direct bookings, special
                requests, or partnership enquiries.
            </p>

            <div className="w-full space-y-6 rounded-2xl bg-indigo-50 p-8 shadow-md md:p-10">
                <ContactLine label="AU" value="+61 451 105 818" />
                <ContactLine label="CN" value="+86 137 9846 1669" />
                <ContactLine label="Email" value="summerdai202207@163.com" isEmail />
            </div>

            <p className="text-sm text-gray-500">
                We typically respond within 1 hour between 08:00–22:00 (GMT+8).
            </p>
        </main>
    );
}

function ContactLine({ label, value, isEmail = false }) {
    return (
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <span className="text-lg font-medium text-gray-800">{label}</span>
            {isEmail ? (
                <a
                    href={`mailto:${value}`}
                    className="text-indigo-600 underline-offset-2 hover:underline"
                >
                    {value}
                </a>
            ) : (
                <a href={`tel:${value.replace(/\s+/g, "")}`} className="text-gray-700">
                    {value}
                </a>
            )}
        </div>
    );
}

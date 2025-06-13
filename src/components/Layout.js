import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

/**
 * Site layout — sticky navbar (button‑style links + animation) + footer.
 */
export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

/* -------------------------------------------------------------------------
 * Navbar
 * --------------------------------------------------------------------- */
function Navbar() {
    const location = useLocation();
    const active = (path) =>
        location.pathname === path || location.pathname.startsWith(path + "/");

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <Link to="/" className="text-xl font-semibold text-indigo-600">
                    AURORA HOLLOW PTY
                </Link>

                <div className="flex space-x-4">
                    <NavItem to="/" active={active("/")}>Home</NavItem>
                    <NavItem to="/properties" active={active("/properties")}>Properties</NavItem>
                    <NavItem to="/contact" active={active("/contact")}>Contact</NavItem>
                </div>
            </nav>
        </header>
    );
}

function NavItem({ to, children, active }) {
    return (
        <Link
            to={to}
            className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition ${active ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"} hover:bg-indigo-600 hover:text-white focus-visible:outline-none`}
        >
            <span className="relative z-10">{children}</span>
            {/* subtle ripple */}
            <span
                aria-hidden
                className="absolute inset-0 -z-10 scale-0 rounded-full bg-indigo-600 opacity-0 transition-transform duration-300 ease-out group-hover:scale-100 group-hover:opacity-20"
            />
        </Link>
    );
}

/* -------------------------------------------------------------------------
 * Footer
 * --------------------------------------------------------------------- */
function Footer() {
    return (
        <footer className="mt-12 bg-gray-50 py-8 text-center text-sm text-gray-600">
            <div className="space-y-2">
                <div className="font-semibold text-gray-800">AURORA HOLLOW PTY LTD.</div>
                <div>Short-term accommodation</div>
                <div>
                    AU: <a href="tel:+61451105818" className="hover:text-indigo-600">+61&nbsp;451&nbsp;105&nbsp;818</a> |
                    CN: <a href="tel:+8613798461669" className="hover:text-indigo-600">+86&nbsp;137&nbsp;9846&nbsp;1669</a>
                </div>
                <div>
                    Email: <a href="mailto:summerdai202207@163.com" className="hover:text-indigo-600">summerdai202207@163.com</a>
                </div>
            </div>
        </footer>
    );
}



const Home = () => {
    return (
        <>




            {/* <!-- Navbar --> */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold tracking-tight">BrandName</h1>
                    <nav className="space-x-6 text-sm font-medium">
                        <a href="#" className="hover:text-indigo-600">Home</a>
                        <a href="#" className="hover:text-indigo-600">Features</a>
                        <a href="#" className="hover:text-indigo-600">Pricing</a>
                        <a href="#" className="hover:text-indigo-600">Contact</a>
                    </nav>
                </div>
            </header>

            {/* <!-- Hero --> */}
            <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Build modern products faster
                        </h2>
                        <p className="mt-6 text-lg text-indigo-100">
                            A clean, flexible homepage template built with Tailwind CSS.
                            Perfect for startups, portfolios, or SaaS products.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <a href="#" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                                Get Started
                            </a>
                            <a href="#" className="border border-white/40 px-6 py-3 rounded-lg hover:bg-white/10">
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                        <div className="h-48 bg-white/20 rounded-lg"></div>
                    </div>
                </div>
            </section>

            {/* <!-- Features --> */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h3 className="text-3xl font-bold text-center">Why Choose Us</h3>
                <p className="text-center text-gray-600 mt-4 max-w-xl mx-auto">
                    Designed for clarity, speed, and scalability.
                </p>

                <div className="mt-16 grid md:grid-cols-3 gap-10">
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                        <h4 className="text-lg font-semibold mb-2">Clean Design</h4>
                        <p className="text-gray-600 text-sm">
                            Minimal layouts focused on readability and user experience.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                        <h4 className="text-lg font-semibold mb-2">Tailwind Powered</h4>
                        <p className="text-gray-600 text-sm">
                            Utility-first styling that’s fast to customize and scale.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                        <h4 className="text-lg font-semibold mb-2">Responsive</h4>
                        <p className="text-gray-600 text-sm">
                            Looks great on desktop, tablet, and mobile screens.
                        </p>
                    </div>
                </div>
            </section>

            {/* <!-- Stats --> */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 text-center gap-12">
                    <div>
                        <p className="text-4xl font-bold text-indigo-600">10K+</p>
                        <p className="text-gray-600 mt-2">Active Users</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-indigo-600">99.9%</p>
                        <p className="text-gray-600 mt-2">Uptime</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-indigo-600">24/7</p>
                        <p className="text-gray-600 mt-2">Support</p>
                    </div>
                </div>
            </section>

            {/* <!-- CTA --> */}
            <section className="bg-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                    <h3 className="text-3xl font-bold">Ready to launch?</h3>
                    <p className="mt-4 text-indigo-100">
                        Start building your next idea with a clean, scalable foundation.
                    </p>
                    <a href="#" className="inline-block mt-8 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                        Start Now
                    </a>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <footer className="bg-gray-900 text-gray-400">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">© 2026 BrandName. All rights reserved.</p>
                    <div className="flex gap-6 text-sm mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Contact</a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Home
import React from 'react'

export default function HowItWorks() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    How It Works
                </h2>
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="text-center flex-1">
                        <div className="text-teal-500 text-4xl font-bold mb-4">01</div>
                        <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                        <p className="text-gray-600">
                            Create your account in seconds.
                        </p>
                    </div>
                    <div className="text-center flex-1">
                        <div className="text-teal-500 text-4xl font-bold mb-4">02</div>
                        <h3 className="text-xl font-semibold mb-2">Plan</h3>
                        <p className="text-gray-600">
                            Add tasks and schedules effortlessly.
                        </p>
                    </div>
                    <div className="text-center flex-1">
                        <div className="text-teal-500 text-4xl font-bold mb-4">03</div>
                        <h3 className="text-xl font-semibold mb-2">Succeed</h3>
                        <p className="text-gray-600">
                            Stay organized and productive.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

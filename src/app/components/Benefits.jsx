import React from 'react'

export default function Benefits() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                        <p className="text-gray-600">
                            Automate your scheduling and focus on what matters.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
                        <p className="text-gray-600">
                            Manage team schedules with ease.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">Stay Flexible</h3>
                        <p className="text-gray-600">
                            Edit and adapt on the go.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

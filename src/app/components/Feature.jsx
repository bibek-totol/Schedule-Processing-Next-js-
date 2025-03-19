import Image from 'next/image'
import React from 'react'

export default function Feature() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Feature 1 */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                            <Image
                                src="/feature/calender.png"
                                width={32}
                                height={32}
                                alt="Calendar"
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            Schedule Management
                        </h3>
                        <p className="text-gray-600">
                            Easily create and manage your schedules with smart time-slot
                            suggestions.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                            <Image
                                src="/feature/check.png"
                                width={32}
                                height={32}
                                alt="Check"
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            Task Prioritization
                        </h3>
                        <p className="text-gray-600">
                            Stay on top of your work with prioritized tasks and deadlines.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                            <Image
                                src="/feature/flexible-schedule.png"
                                width={32}
                                height={32}
                                alt="Flexible Schedule"
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            Calendar Sync
                        </h3>
                        <p className="text-gray-600">
                            Seamlessly integrate with Google Calendar for a unified view.
                        </p>
                    </div>
                    {/* Feature 4 */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <div className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                            <Image
                                src="/feature/al.png"
                                width={32}
                                height={32}
                                alt="Reminders"
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Reminders</h3>
                        <p className="text-gray-600">
                            Never miss a beat with customizable notifications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

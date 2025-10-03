import { FaMicrophone, FaClipboardCheck, FaChartLine, FaPenFancy } from "react-icons/fa";
const About = () => {
    return (
        <div>
            <section className="bg-gray-50 text-black py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our Key Features
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg md:text-xl">
                        Everything you need to prepare for IELTS effectively and confidently.
                    </p>

                    {/* Feature Cards */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1: Speaking Practice */}
                        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
                            <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                                <FaMicrophone />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Speaking Practice</h3>
                            <p className="text-gray-600 text-sm">
                                Daily speaking sessions to improve fluency and boost confidence.
                            </p>
                        </div>

                        {/* Card 2: Mock Tests */}
                        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
                            <div className="text-green-600 text-4xl mb-4 flex justify-center">
                                <FaClipboardCheck />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Mock Tests</h3>
                            <p className="text-gray-600 text-sm">
                                Regular IELTS mock tests with detailed feedback and scoring analysis.
                            </p>
                        </div>

                        {/* Card 3: AI Band Score */}
                        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
                            <div className="text-purple-600 text-4xl mb-4 flex justify-center">
                                <FaChartLine />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">AI Band Score</h3>
                            <p className="text-gray-600 text-sm">
                                Get instant AI-based band score predictions and track your progress.
                            </p>
                        </div>

                        {/* Card 4: Writing & Grammar */}
                        <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
                            <div className="text-red-600 text-4xl mb-4 flex justify-center">
                                <FaPenFancy />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Writing & Grammar</h3>
                            <p className="text-gray-600 text-sm">
                                Personalized writing evaluations and grammar correction tips.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
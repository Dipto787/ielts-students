 import ielts_students from '../assets/ielts-students.jpg'
const Hero = () => {
    return (
        <div>
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-10 py-20">

                    {/* Left Content: Headline + Subtext + CTA */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Crack IELTS with Confidence
                        </h1>
                        <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed">
                            Join our expert-led IELTS courses. Get personalized speaking practice, mock tests,
                            and AI-powered band score tracking to boost your results.
                        </p>
                        <div className="mt-8 flex justify-center lg:justify-start gap-4">
                            <a
                                href="#"
                                className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition">
                                Get Started
                            </a>
                            <a
                                href="#"
                                className="px-6 py-3 bg-gray-200 text-gray-900 rounded-full text-lg font-medium hover:bg-gray-300 transition">
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Right Content: Image / Banner */}
                    <div className="flex-1">
                        <img
                            src={ielts_students}
                            className="w-full rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
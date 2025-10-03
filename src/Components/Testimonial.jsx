import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Sarah Ahmed",
        text: "IELTS Academy helped me achieve my dream score! The speaking sessions were amazing.",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5
    },
    {
        name: "Rafiq Khan",
        text: "Mock tests and AI band score predictions made my preparation very effective.",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        rating: 5
    },
    {
        name: "Nadia Rahman",
        text: "Personalized writing feedback helped me improve my essays significantly.",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        rating: 4
    },
];
const Testimonial = () => {
    return (
        <div>
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        What Our Students Say
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg md:text-xl">
                        Real feedback from students who achieved their dream IELTS scores.
                    </p>

                    {/* Testimonials Grid */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-2xl transition">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full object-cover mb-4"
                                />

                                <p className="text-gray-600 text-sm text-center mb-4">
                                    "{item.text}"
                                </p>

                                <div className="flex gap-1 mb-2">
                                    {Array.from({ length: item.rating }).map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>

                                <h6 className="font-semibold text-gray-900">{item.name}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Testimonial;
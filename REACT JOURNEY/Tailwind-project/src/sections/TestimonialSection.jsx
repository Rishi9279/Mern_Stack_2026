import React from "react";
import TestimonialCard from "../components/TestimonialCard";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Interior Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review: "\"The quality of FUTURA HOME products is exceptional. My clients are always impressed with the attention to detail and unique designs.\"",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Homeowner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review: "\"I completely transformed my living room with FUTURA furniture. The pieces are not only beautiful but also incredibly comfortable and durable.\"",
      rating: 5,
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      role: "Architect",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review: "\"As an architect, I appreciate the innovative design approach of FUTURA HOME. Their products blend seamlessly with modern architectural concepts.\"",
      rating: 5,
    },
  ];
  return (
    <section className="py-12 px-10">
      <div>
        <h2 className="text-2xl font-bold text-center ">What Our Customers Say</h2>
        <p className="text-center text-gray-600">Don't just take our word for it - here's what our satisfied customers have to say about their experience with FUTURA HOME.</p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-7 my-15">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;

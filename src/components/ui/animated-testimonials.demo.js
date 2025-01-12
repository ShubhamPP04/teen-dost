import { AnimatedTestimonials } from "./animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Shubham Kumar",
      designation: "Nonu",
      src: "https://i.ibb.co/r0kL8Db/Whats-App-Image-2025-01-12-at-21-55-10.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Aditya Maheshwari",
      designation: "Aadi",
      src: "https://i.ibb.co/5Rmt074/Whats-App-Image-2025-01-12-at-21-51-52.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Aniruddha Ghosh",
      designation: "Ani",
      src: "https://i.ibb.co/y5WkDhz/Whats-App-Image-2025-01-12-at-21-52-09.jpg",
    },
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}

export { AnimatedTestimonialsDemo }; 
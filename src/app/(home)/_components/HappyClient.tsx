"use client"
import { useRef } from "react";
import LeftArrowButton from "@/assets/icons/LeftArrowButton";
import RightArrowButton from "@/assets/icons/RightArrowButton";
import ClientReview from "./ClientReview";

type Testimonial = {
  name: string;
  position: string;
  rating: number;
  imageUrl: string;
  review: string;
};

function HappyClient() {
  const carouselRef = useRef<HTMLDivElement>(null); // Create a reference to the carousel container

  const testimonials: Testimonial[] = [
    {
      name: "Ahmed Saimoon",
      position: "CEO, Avito",
      rating: 3,
      imageUrl: "https://plus.unsplash.com/premium_photo-1661683653197-ca2d0aab80eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmwlMjBmYWNlfGVufDB8fDB8fHww",
      review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
      name: "Ahmed Saimoon",
      position: "CEO, Avito",
      rating: 5,
      imageUrl: "https://plus.unsplash.com/premium_photo-1661683653197-ca2d0aab80eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmwlMjBmYWNlfGVufDB8fDB8fHww",
      review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
      name: "Ahmed Saimoon",
      position: "CEO, Avito",
      rating: 5,
      imageUrl: "https://plus.unsplash.com/premium_photo-1661683653197-ca2d0aab80eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmwlMjBmYWNlfGVufDB8fDB8fHww",
      review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
      name: "Ahmed Saimoon",
      position: "CEO, Avito",
      rating: 5,
      imageUrl: "https://plus.unsplash.com/premium_photo-1661683653197-ca2d0aab80eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmwlMjBmYWNlfGVufDB8fDB8fHww",
      review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
      name: "Ahmed Saimoon",
      position: "CEO, Avito",
      rating: 5,
      imageUrl: "https://plus.unsplash.com/premium_photo-1661683653197-ca2d0aab80eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmwlMjBmYWNlfGVufDB8fDB8fHww",
      review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
      name: "Ahmed Saimoon",
      position: "CEO, Avito",
      rating: 5,
      imageUrl: "https://plus.unsplash.com/premium_photo-1661683653197-ca2d0aab80eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmwlMjBmYWNlfGVufDB8fDB8fHww",
      review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    // Add more testimonials...
  ];

  // Function to scroll the carousel left or right
  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust the scroll amount as needed
      const currentScrollPosition = carouselRef.current.scrollLeft;

      if (direction === "left") {
        carouselRef.current.scrollTo({
          left: currentScrollPosition - scrollAmount,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollTo({
          left: currentScrollPosition + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="pb-[96px] flex flex-col items-center gap-8 border-0 border-pink-600 justify-center w-full font-marcellus">
      <div className="text-center">
        <h2 className="lg:text-2xl md:text-2xl text-md border-0 border-blue-500">Our Happy Clients</h2>
      </div>

      <div className="relative flex items-center gap-2 max-w-screen-xl mx-auto container lg:px-0 px-2 lg:my-[0px] my-[0px] border-0 border-red-700">
        {/* Left Button */}
        <button
          id="prevButton"
          onClick={() => scrollCarousel("left")}
          className="lg:p-4 p-2 bg-white rounded-full shadow-md"
        >
          <LeftArrowButton />
        </button>

        {/* Testimonial Cards Wrapper */}
        <div
          ref={carouselRef}
          id="carousel"
          className="flex carousel-scroll gap-4 overflow-x-auto max-w-full snap-x snap-mandatory px-4 py-4"
        >
          {/* Cards will be dynamically added here */}
          {testimonials.map((client, index) => (
            <ClientReview
              key={index}
              clientName={client.name}
              clientImage={client.imageUrl}
              rating={client.rating}
              review={client.review}
            />
          ))}
        </div>

        {/* Right Button */}
        <button
          id="nextButton"
          onClick={() => scrollCarousel("right")}
          className="lg:p-4 p-2 bg-white rounded-full shadow-md"
        >
          <RightArrowButton />
        </button>
      </div>
    </div>
  );
}

export default HappyClient;

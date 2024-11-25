'use client';
import LeftArrow from "@/assets/icons/LeftArrow";
import RightArrow from "@/assets/icons/RightArrow";
import CategoryCard from "./CategoryCard";
import { useRef, useState } from "react";

function CategorySlider() {
  const cardData = [
    {
      id: "1",
      title: "Tropical",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682542226584-e776098d5ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9uc2FpJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      altText: "Tropical bonsai plant",
      link: "/tropical",
    },
    {
      id: "2",
      title: "Desert",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682542226584-e776098d5ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9uc2FpJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      altText: "Desert bonsai plant",
      link: "/desert",
    },
    {
      id: "3",
      title: "Japanese Maple",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682542226584-e776098d5ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9uc2FpJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      altText: "Japanese maple bonsai plant",
      link: "/japanese-maple",
    },
    {
      id: "4",
      title: "Ficus",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682542226584-e776098d5ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9uc2FpJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      altText: "Ficus bonsai plant",
      link: "/ficus",
    },
    {
      id: "5",
      title: "Juniper",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682542226584-e776098d5ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9uc2FpJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      altText: "Juniper bonsai plant",
      link: "/juniper",
    },
    {
      id: "6",
      title: "Pine",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682542226584-e776098d5ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9uc2FpJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      altText: "Pine bonsai plant",
      link: "/pine",
    },
    {
      id: "7",
      title: "Flowering Cherry",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682542226584-e776098d5ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9uc2FpJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      altText: "Flowering cherry bonsai plant",
      link: "/flowering-cherry",
    },
    {
      id: "8",
      title: "Olive",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682542226584-e776098d5ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9uc2FpJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
      altText: "Olive bonsai plant",
      link: "/olive",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (carousel) {
      const firstCardWidth = (carousel.querySelector(".card") as HTMLElement)?.offsetWidth || 0;

      carousel.scrollLeft += direction === "left" ? -firstCardWidth : firstCardWidth;
    }
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setIsDragging(true);
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX);
    setStartScrollLeft(carousel.scrollLeft);
  };

  const handleDragging = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const walk = pageX - startX;
    carousel.scrollLeft = startScrollLeft - walk;
  };

  const handleDragStop = () => {
    setIsDragging(false);
  };

  return (
    <section className="container mx-auto max-w-screen-xl px-4 pt-12 pb-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Find Plant Category</h1>
        <div className="flex gap-2">
          <button
            onClick={() => handleScroll("left")}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Scroll Left"
          >
            <LeftArrow />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Scroll Right"
          >
            <RightArrow />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth carousel lg:gap-4 md:gap-4 gap-2 p-2 border-0 border-red-500"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragging}
        onMouseUp={handleDragStop}
        onMouseLeave={handleDragStop}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragging}
        onTouchEnd={handleDragStop}
      >
        {cardData.map((card) => (
          <CategoryCard
            key={card.id}
            categoryTitle={card.title}
            categoryImage={card.imageUrl}
            categoryLink={card.link}
            categoryDescription={card.altText}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySlider;

"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialData";
import ReviewDialog from "@/components/sections/reviews/ReviewDialog";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.35em] text-[#005EB8]">
            TESTIMONIALS
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            What Our Customers Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Trusted by hospitals, clinics and healthcare
            professionals across Maharashtra.
          </p>
        </div>
<div className="mt-10 flex justify-center">
    <ReviewDialog />
</div>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 4000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="mt-20"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import StarRating from "./StarRating";
import { supabase } from "@/lib/supabase";

export default function ReviewForm() {
  const { register, handleSubmit } = useForm();

  const [rating, setRating] = useState(5);

  const onSubmit = (data: any) => {
    supabase
      .from("reviews")
      .insert({
        name: data.name,
        company: data.company,
        review: data.review,
        rating,
      },
    )
      .then(() => {
        alert("Review submitted successfully!");
      });
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <input
        {...register("name")}
        placeholder="Full Name"
        className="w-full rounded-xl border p-4"
      />

      <input
        {...register("company")}
        placeholder="Hospital / Company"
        className="w-full rounded-xl border p-4"
      />

      <textarea
        {...register("review")}
        placeholder="Write your review..."
        rows={5}
        className="w-full rounded-xl border p-4"
      />

      <StarRating
        value={rating}
        onChange={setRating}
      />

      <button
        className="w-full rounded-xl bg-[#005EB8] py-4 font-semibold text-white"
      >
        Submit Review
      </button>
    </form>
  );
}
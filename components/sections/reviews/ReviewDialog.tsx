"use client";

import { useState } from "react";
import ReviewForm from "./ReviewForm";

export default function ReviewDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-[#005EB8] px-6 py-3 font-semibold text-white"
      >
        Write a Review
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                Share Your Experience
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-2xl"
              >
                ✕
              </button>
            </div>

            <ReviewForm />
          </div>
        </div>
      )}
    </>
  );
}
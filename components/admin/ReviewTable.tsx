"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import ReviewRow from "./ReviewRow";

export default function ReviewTable() {

    const [reviews, setReviews] = useState<any[]>([]);

    useEffect(() => {

        fetchReviews();

    }, []);

    async function fetchReviews() {

        const { data } = await supabase
            .from("reviews")
            .select("*")
            .order("created_at", {
                ascending: false,
            });

        setReviews(data || []);

    }

    return (

        <div className="overflow-auto rounded-2xl bg-white shadow">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="p-4 text-left">
                            Name
                        </th>

                        <th>Company</th>

                        <th>Rating</th>

                        <th>Status</th>

                        <th>Review</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {reviews.map((review) => (

                        <ReviewRow
                            key={review.id}
                            review={review}
                        />

                    ))}

                </tbody>

            </table>

        </div>

    );

}
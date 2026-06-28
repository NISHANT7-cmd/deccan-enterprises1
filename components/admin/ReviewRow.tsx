"use client";

import {
  approveReview,
  rejectReview,
  deleteReview,
} from "@/app/admin/actions";

interface Props {
    review: any;
}

export default function ReviewRow({
    review,
}: Props) {

    async function handleApprove() {
  await approveReview(review.id);
}

async function handleReject() {
  await rejectReview(review.id);
}

async function handleDelete() {
  if (!confirm("Delete this review?")) return;

  await deleteReview(review.id);
}

    return (
        <tr className="border-b">
            <td className="p-4">
                {review.name}
            </td>

            <td>{review.company}</td>

            <td>{review.rating}⭐</td>

            <td>{review.status}</td>

            <td className="max-w-md">
                {review.review}
            </td>

            <td className="space-x-2">

                <button
  onClick={handleApprove}
  className="rounded bg-green-600 px-4 py-2 text-white"
>
  Approve
</button>

<button
  onClick={handleReject}
  className="rounded bg-yellow-600 px-4 py-2 text-white"
>
  Reject
</button>

<button
  onClick={handleDelete}
  className="rounded bg-red-600 px-4 py-2 text-white"
>
  Delete
</button>

            </td>

        </tr>
    );
}
import { useEffect, useState } from "react";
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

function CustomerReviews() {

    const [reviews, setReviews] = useState([]);
    const [reviewIndex, setReviewIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false); // ✅ Modal State

    const [newReview, setNewReview] = useState({
        name: "",
        role: "",
        rating: 5,
        title: "",
        text: "",
    });

    // Responsive items per view
    const getItemsPerView = () => {
        if (window.innerWidth >= 1024) return 3; // Desktop
        if (window.innerWidth >= 768) return 2;  // Tablet
        return 1; // Mobile
    };

    /* ================= FETCH REVIEWS REALTIME ================= */
    useEffect(() => {
        const q = query(
            collection(db, "reviews"),
            orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const reviewList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setReviews(reviewList);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    /* ================= ADD REVIEW ================= */
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!newReview.name || !newReview.text) {
            alert("Please fill required fields");
            return;
        }

        try {
            await addDoc(collection(db, "reviews"), {
                ...newReview,
                rating: Number(newReview.rating),
                createdAt: serverTimestamp(),
            });

            setNewReview({
                name: "",
                role: "",
                rating: 5,
                title: "",
                text: "",
            });

            setShowModal(false); // ✅ Close modal
            alert("Review submitted successfully!");
        } catch (error) {
            console.error("Error adding review:", error);
        }
    };

    const averageRating =
        reviews.length > 0
            ? (
                reviews.reduce((acc, r) => acc + r.rating, 0) /
                reviews.length
            ).toFixed(1)
            : "0.0";

    return (
        <>
            {/* ================= HEADER ================= */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Customer Reviews
                </h2>

                <div className="mt-4 flex items-center justify-center gap-3">
                    <span className="text-2xl font-semibold">
                        {averageRating} / 5
                    </span>

                    <div className="flex text-yellow-400 text-xl">
                        {"★".repeat(Math.round(averageRating))}
                    </div>

                    <span className="text-sm text-gray-500">
                        Based on {reviews.length} reviews
                    </span>
                </div>

                {/* ✅ Open Modal Button */}
                <button
                    onClick={() => setShowModal(true)}
                    className="mt-6 bg-[#0ea5a4] text-white px-6 py-3 rounded-lg hover:bg-[#0f766e] transition"
                >
                    Add a Review
                </button>
            </div>

            {/* ================= MODAL ================= */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative animate-fadeIn">

                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                        >
                            ✕
                        </button>

                        <h3 className="text-xl font-semibold mb-6 text-center">
                            Add a Review
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                type="text"
                                placeholder="Your Name *"
                                className="w-full border p-3 rounded-lg"
                                value={newReview.name}
                                onChange={(e) =>
                                    setNewReview({ ...newReview, name: e.target.value })
                                }
                                required
                            />

                            <input
                                type="text"
                                placeholder="Country / City"
                                className="w-full border p-3 rounded-lg"
                                value={newReview.role}
                                onChange={(e) =>
                                    setNewReview({ ...newReview, role: e.target.value })
                                }
                            />

                            {/* Star Rating */}
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Rating:</span>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        type="button"
                                        key={star}
                                        onClick={() =>
                                            setNewReview({ ...newReview, rating: star })
                                        }
                                        className={`text-2xl ${star <= newReview.rating
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                            }`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>

                            <input
                                type="text"
                                placeholder="Review Title"
                                className="w-full border p-3 rounded-lg"
                                value={newReview.title}
                                onChange={(e) =>
                                    setNewReview({ ...newReview, title: e.target.value })
                                }
                            />

                            <textarea
                                placeholder="Write your experience *"
                                rows="4"
                                className="w-full border p-3 rounded-lg"
                                value={newReview.text}
                                onChange={(e) =>
                                    setNewReview({ ...newReview, text: e.target.value })
                                }
                                required
                            />

                            <button
                                type="submit"
                                className="w-full bg-[#0ea5a4] text-white py-3 rounded-lg hover:bg-[#0f766e] transition"
                            >
                                Submit Review
                            </button>

                        </form>
                    </div>
                </div>
            )}

            {/* ================= REVIEWS SLIDER ================= */}
            {loading ? (
                <div className="text-center py-10">Loading reviews...</div>
            ) : reviews.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                    No reviews yet.
                </div>
            ) : (
                <>
                    <div className="relative overflow-hidden max-w-7xl mx-auto">
                        <div
                            className="flex transition-transform duration-700"
                            style={{
                                transform: `translateX(-${reviewIndex * (100 / getItemsPerView())}%)`,
                            }}
                        >
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="w-full md:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
                                >
                                    <div className="bg-white rounded-xl shadow-md p-6 h-full">

                                        <h3 className="font-semibold text-lg">
                                            {review.name}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            {review.role}
                                        </p>

                                        <div className="flex text-yellow-400 mt-2">
                                            {"★".repeat(review.rating)}
                                        </div>

                                        {review.title && (
                                            <h4 className="mt-4 font-semibold">
                                                "{review.title}"
                                            </h4>
                                        )}

                                        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                                            {review.text}
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-10">
                        <button
                            onClick={() =>
                                setReviewIndex(
                                    reviewIndex === 0
                                        ? reviews.length - getItemsPerView()
                                        : reviewIndex - 1
                                )
                            }
                            className="w-10 h-10 rounded-full bg-gray-800 text-white"
                        >
                            ‹
                        </button>

                        <button
                            onClick={() =>
                                setReviewIndex(
                                    reviewIndex >= reviews.length - getItemsPerView()
                                        ? 0
                                        : reviewIndex + 1
                                )
                            }
                            className="w-10 h-10 rounded-full bg-gray-800 text-white"
                        >
                            ›
                        </button>
                    </div>
                </>
            )}
        </>
    );
}

export default CustomerReviews;
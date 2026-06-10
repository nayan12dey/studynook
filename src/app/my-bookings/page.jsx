import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { CancelBooking } from "@/components/CancelBooking";
import {
    FiCalendar,
    FiClock,
    FiDollarSign,
    FiFileText,
    FiBookOpen,
} from "react-icons/fi";
import Link from "next/link";

export const metadata = {
    title: "StudyNook - My Bookings",
    description: "View and manage all your study room bookings.",
};

const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    // console.log(token)

    const user = session?.user;
    // console.log(user, "user from mybooking")

    let bookings = [];
    if (user?.id) {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`, {
                method: 'GET',
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                cache: "no-store",
            });
            if (res.ok) {
                bookings = await res.json();
                // console.log(bookings)
            }
        } catch {
            bookings = [];
        }
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
                        <FiBookOpen className="text-white w-5 h-5" />
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                        My Bookings
                    </h1>
                </div>
                <p className="text-slate-500 text-sm ml-[52px]">
                    Manage all your study room reservations in one place.
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                {bookings.length === 0 ? (
                    /* Empty State  */
                    <div className="flex flex-col items-center justify-center py-28 text-center">
                        <div className="w-24 h-24 rounded-full bg-indigo-50 border-2 border-dashed border-indigo-200 flex items-center justify-center mb-6">
                            <FiCalendar className="w-10 h-10 text-indigo-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-700 mb-2">
                            You have no bookings yet.
                        </h2>
                        <p className="text-slate-400 text-sm max-w-xs">
                            Once you book a study room it will appear here. Go explore
                            available rooms!
                        </p>
                        <Link
                            href="/rooms"
                            id="explore-rooms-btn"
                            className="mt-7 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 shadow-md hover:shadow-indigo-300/60 hover:shadow-lg active:scale-95"
                        >
                            Explore Rooms
                        </Link>
                    </div>
                ) : (
                    /* Booking Cards Grid  */
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {bookings.map((booking) => {
                            const isConfirmed = booking.status === "confirmed";
                            const bookingDate = new Date(booking.bookingDate);
                            bookingDate.setHours(0, 0, 0, 0);
                            const isFuture = bookingDate >= today;
                            const canCancel = isConfirmed && isFuture;

                            return (
                                <div
                                    key={booking._id}
                                    className="group bg-white/80 backdrop-blur-sm border border-white/70 rounded-3xl shadow-lg shadow-slate-200/60 overflow-hidden hover:shadow-xl hover:shadow-indigo-100/60 hover:-translate-y-1 transition-all duration-300"
                                >
                                    {/* Room image */}
                                    <div className="relative h-44 w-full overflow-hidden">
                                        <Image
                                            src={booking.room_image}
                                            alt={booking.room_name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Status badge overlay */}
                                        <div className="absolute top-3 right-3">
                                            {isConfirmed ? (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-md shadow-emerald-200">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                    Confirmed
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-500 text-white shadow-md shadow-rose-200">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                                    Cancelled
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Card body */}
                                    <div className="p-5 flex flex-col gap-4">
                                        {/* Room name */}
                                        <h2 className="text-lg font-bold text-slate-800 leading-tight line-clamp-1">
                                            {booking.room_name}
                                        </h2>

                                        {/* Details grid */}
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                <FiCalendar className="w-4 h-4 shrink-0 text-indigo-400" />
                                                <span className="font-medium text-slate-700">
                                                    {new Date(booking.bookingDate).toLocaleDateString(
                                                        "en-IN",
                                                        {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric",
                                                        }
                                                    )}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                <FiDollarSign className="w-4 h-4 shrink-0 text-indigo-400" />
                                                <span className="font-bold text-slate-800">
                                                    ${booking.totalCost}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-slate-500 text-sm col-span-2">
                                                <FiClock className="w-4 h-4 shrink-0 text-indigo-400" />
                                                <span className="font-medium text-slate-700">
                                                    {booking.startTime} – {booking.endTime}
                                                </span>
                                            </div>

                                            {booking.specialNote && (
                                                <div className="flex items-start gap-2 text-slate-500 text-sm col-span-2">
                                                    <FiFileText className="w-4 h-4 shrink-0 text-indigo-400 mt-0.5" />
                                                    <span className="text-slate-600 line-clamp-2 italic">
                                                        {booking.specialNote}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Divider */}
                                        <hr className="border-slate-100" />

                                        {/* Footer */}
                                        <div className="flex items-center justify-end">


                                            {canCancel && (
                                                <CancelBooking bookingId={booking._id} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyBookingsPage;






// app.get("/request/:email", async (req, res) => {
//   const email = req.params.email;

//   const query = {
//     yourEmail: email,
//   };

//   const result = await requestCollection.find(query).toArray();

//   res.send(result);
// });
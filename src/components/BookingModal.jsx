
"use client";

import { Button, Modal, Surface } from "@heroui/react";
import { FaBolt } from "react-icons/fa";
import { useMemo, useState } from "react";
import {
    FiCalendar,
    FiClock,
    FiFileText,
} from "react-icons/fi";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
// import { auth } from "@/lib/auth";

const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
];

export function BookingModal({ hourly_rate, room, user }) {
    const { data: session, isPending } = authClient.useSession()
    console.log(session?.session?.token, "session")
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [specialNote, setSpecialNote] = useState("");

    const endTimeOptions = useMemo(() => {
        return timeSlots.filter((slot) => slot > startTime);
    }, [startTime]);

    const totalCost = useMemo(() => {
        if (!startTime || !endTime) return 0;

        const startHour = Number(startTime.split(":")[0]);
        const endHour = Number(endTime.split(":")[0]);

        return (endHour - startHour) * hourly_rate;
    }, [startTime, endTime, hourly_rate]);


    const { room_name, room_image, ownerEmail } = room


    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            roomId: room._id,
            room_name,
            room_image,
            bookingDate: date,
            startTime,
            endTime,
            startHour: Number(startTime.split(":")[0]),
            endHour: Number(endTime.split(":")[0]),
            totalCost,
            specialNote,
            ownerEmail,
            userId: user.id
        };

        // const { token } = await auth.api.getToken({

        //     headers: await headers() // headers containing the user's session token
        // });


        
        const res = await fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${session?.session?.token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingData)
        })

        console.log(bookingData);

        const data = await res.json();
        if (res.ok) {
            toast.success("Room booked successfully!")
        }
        else {
            toast.error(data.message)
        }

    };

    return (
        <Modal>
            <Button
                id="book-now-btn"
                className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-[0.97] text-white font-bold p-6.5 rounded-2xl transition-all duration-300 shadow-md hover:shadow-indigo-300/50 hover:shadow-lg flex items-center justify-center gap-2"
            >
                <FaBolt className="w-4 h-4" />
                Book Now
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-2xl overflow-y-auto">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading>
                                Study Room
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                >
                                    {/* Booking Details */}
                                    <div className="space-y-6">
                                        {/* Date */}
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700">
                                                Booking Date{" "}
                                                <span className="text-rose-500">
                                                    *
                                                </span>
                                            </label>

                                            <div className="mt-2 relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <FiCalendar className="text-slate-400 w-5 h-5" />
                                                </div>

                                                <input
                                                    type="date"
                                                    value={date}
                                                    onChange={(e) =>
                                                        setDate(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50"
                                                />
                                            </div>
                                        </div>

                                        {/* Time Selection */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700">
                                                    Start Time{" "}
                                                    <span className="text-rose-500">
                                                        *
                                                    </span>
                                                </label>

                                                <div className="mt-2 relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <FiClock className="text-slate-400 w-5 h-5" />
                                                    </div>

                                                    <select
                                                        value={startTime}
                                                        onChange={(e) =>
                                                            setStartTime(
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50 appearance-none"
                                                    >
                                                        <option value="">
                                                            Select Start Time
                                                        </option>

                                                        {timeSlots.map(
                                                            (slot) => (
                                                                <option
                                                                    key={slot}
                                                                    value={
                                                                        slot
                                                                    }
                                                                >
                                                                    {slot}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700">
                                                    End Time{" "}
                                                    <span className="text-rose-500">
                                                        *
                                                    </span>
                                                </label>

                                                <div className="mt-2 relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <FiClock className="text-slate-400 w-5 h-5" />
                                                    </div>

                                                    <select
                                                        value={endTime}
                                                        onChange={(e) =>
                                                            setEndTime(
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50 appearance-none"
                                                    >
                                                        <option value="">
                                                            Select End Time
                                                        </option>

                                                        {endTimeOptions.map(
                                                            (slot) => (
                                                                <option
                                                                    key={slot}
                                                                    value={
                                                                        slot
                                                                    }
                                                                >
                                                                    {slot}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Note */}
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700">
                                                Special Note
                                            </label>

                                            <div className="mt-2 relative">
                                                <div className="absolute top-4 left-4 pointer-events-none">
                                                    <FiFileText className="text-slate-400 w-5 h-5" />
                                                </div>

                                                <textarea
                                                    value={specialNote}
                                                    onChange={(e) =>
                                                        setSpecialNote(
                                                            e.target.value
                                                        )
                                                    }
                                                    rows={4}
                                                    placeholder="Any special requirements or notes..."
                                                    className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50 resize-y"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cost Summary */}
                                    <div className="pt-6 border-t border-slate-100">
                                        <label className="block text-sm font-semibold text-slate-700">
                                            Total Booking Cost
                                        </label>
                                        <div className="flex items-center justify-between bg-indigo-50 border border-indigo-100 rounded-xl p-5 mt-2">

                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-indigo-700">
                                                        ${totalCost}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            slot="close"
                                            className="w-full bg-indigo-700 p-5"
                                        >
                                            Confirm Booking
                                        </Button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}




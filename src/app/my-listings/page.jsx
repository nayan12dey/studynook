"use client"

import RoomCard from '@/components/RoomCard';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBuilding } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';



const MyListingPage = () => {

    const [rooms, setRooms] = useState([]);
    console.log(rooms)

    const getRooms = async () => {
            const session = await authClient.getSession();
        console.log(session)

            const email = session?.data?.user?.email;

            const { data: token } = await authClient.token();
            console.log(token)


            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-listings/${email}`, {
                headers: {
                authorization: `Bearer ${token.token}`,
                },
        }
        );

                const data = await res.json() || [];

                setRooms(data);

    }

    useEffect(() => {
        getRooms();
    }, []);




    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
                        <FiGrid className="text-white w-5 h-5" />
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                        My Listings
                    </h1>
                </div>
                <p className="text-slate-500 text-sm ml-[52px]">
                    Manage the study rooms you have listed on StudyNook.
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                {rooms.length === 0 ? (
                    /* Empty State */
                    <div className="flex flex-col items-center justify-center py-28 text-center bg-white/40 backdrop-blur-md rounded-3xl border border-white shadow-sm">
                        <div className="w-24 h-24 rounded-full bg-indigo-50 border-2 border-dashed border-indigo-200 flex items-center justify-center mb-6">
                            <FaBuilding className="w-10 h-10 text-indigo-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-700 mb-2">
                            You have no listings yet.
                        </h2>
                        <p className="text-slate-500 text-sm max-w-sm mb-8">
                            Ready to share your study space? Create your first listing and start earning.
                        </p>
                        <Link
                            href="/add-room"
                            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 shadow-md hover:shadow-indigo-300/60 hover:shadow-lg active:scale-95"
                        >
                            Add a Room
                        </Link>
                    </div>
                ) : (
                    /* Listings Grid */
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {rooms?.map((room) => (
                            <RoomCard
                                key={room._id}
                                room={room}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyListingPage;   
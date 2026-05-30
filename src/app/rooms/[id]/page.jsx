import AmenityBadge from '@/components/AmenityBadge';
import BookingCard from '@/components/BookingCard';
import Stat from '@/components/Stat';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaBuilding,
    FaClock,
    FaUsers,
    FaArrowLeftLong,
    FaCircleCheck,
    FaStar,
    FaLocationDot,
    FaBolt,
} from 'react-icons/fa6';


const fetchSingleRoom = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`, {
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    });
    const data = await res.json();
    return data || {};
};



const RoomDetailsPage = async ({ params }) => {
    const { id } = await params;

    const { token } = await auth.api.getToken({

        headers: await headers() // headers containing the user's session token
    });




    const room = await fetchSingleRoom(id, token);


    const {
        _id,
        room_name,
        description,
        amenities = [],
        floor,
        hourly_rate,
        seat_capacity,
        room_image,
        availability_status,
    } = room;

    const isAvailable = availability_status !== 'unavailable';

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">

            {/* Top breadcrumb bar*/}
            <div className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-40">
                <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-3">
                    <Link
                        href="/rooms"
                        id="back-to-rooms-link"
                        className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 text-sm font-medium transition-colors"
                    >
                        <FaArrowLeftLong className="w-3.5 h-3.5" />
                        All Rooms
                    </Link>
                    <span className="text-slate-300">/</span>
                    <span className="text-slate-700 font-semibold text-sm truncate max-w-xs">
                        {room_name}
                    </span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-10">

                {/*  Hero image  */}
                <div className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80 mb-10 group">
                    {room_image ? (
                        <Image
                            src={room_image}
                            alt={room_name}
                            fill
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                            priority
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-slate-200 flex items-center justify-center">
                            <FaBuilding className="w-20 h-20 text-indigo-200" />
                        </div>
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Availability badge */}
                    <div className="absolute top-5 left-5">
                        <span
                            className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm border ${isAvailable
                                ? 'bg-emerald-500/90 border-emerald-400 text-white'
                                : 'bg-rose-500/90 border-rose-400 text-white'
                                } backdrop-blur-md`}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full ${isAvailable ? 'bg-white animate-pulse' : 'bg-white/60'}`} />
                            {isAvailable ? 'Available' : 'Unavailable'}
                        </span>
                    </div>



                    {/* Room name overlay on image */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <h1 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg leading-tight">
                            {room_name}
                        </h1>
                        <p className="flex items-center gap-1.5 text-white/80 text-sm mt-1 font-medium">
                            <FaLocationDot className="w-3.5 h-3.5 text-indigo-300" />
                            Floor {floor}
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    <div className="lg:col-span-2 flex flex-col gap-8">

                        {/* stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <Stat icon={FaClock} label="Hourly Rate" value={`$${hourly_rate}`} accent={true} />
                            <Stat icon={FaUsers} label="Capacity" value={`${seat_capacity} people`} />
                            <Stat icon={FaBuilding} label="Floor" value={`${floor}`} />
                            <Stat icon={FaBolt} label="Status" value={isAvailable ? 'Open' : 'Closed'} />
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7">
                            <h2 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                                <span className="w-1 h-5 bg-indigo-500 rounded-full inline-block" />
                                About This Room
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {description || 'No description provided for this room.'}
                            </p>
                        </div>

                        {/* Amenities */}
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7">
                            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <span className="w-1 h-5 bg-indigo-500 rounded-full inline-block" />
                                Amenities
                            </h2>
                            {amenities.length > 0 ? (
                                <div className="flex flex-wrap gap-2">
                                    {amenities.map((amenity, index) => (
                                        <AmenityBadge key={index} label={amenity} />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-slate-400 text-sm italic">No amenities listed.</p>
                            )}
                        </div>


                    </div>

                    {/* booking card*/}
                    <div className="lg:col-span-1">
                        <BookingCard hourly_rate={hourly_rate} room_name={room_name} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomDetailsPage;

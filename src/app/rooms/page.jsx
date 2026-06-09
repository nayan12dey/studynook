import AmenitiesFilter from '@/components/AmenitiesFilter';
import RoomCard from '@/components/RoomCard';
import SearchBar from '@/components/SearchBar';
// import RoomsFilter from '@/components/RoomsFilter';
import { fetchRooms } from '@/lib/data';
import Link from 'next/link';

export const metadata = {
    title: "StudyNook - Available Rooms",
    description: "Browse all available study rooms and reserve your perfect spot.",
};


const RoomsPage = async ({ searchParams }) => {
    // console.log(searchParams)
    const sParams = await searchParams
    console.log(sParams)


    const rooms = await fetchRooms(sParams?.searchTerm || "", sParams?.amenities || "");

    return (
        <div className="bg-slate-50 min-h-screen pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-indigo-600 font-semibold text-xs uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
                        Available Spaces
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mt-5 tracking-tight">
                        Find Your Ideal <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Study Nook</span>
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
                        Browse and reserve premium study rooms tailored for deep focus, team collaboration, and digital learning. Equipped with premium amenities and flexible hourly rates.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mb-12 flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <SearchBar />
                    </div>

                    <div className="w-full sm:w-56">
                        <AmenitiesFilter />
                    </div>
                </div>





                {
                    rooms.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {rooms.map((room) => (
                                <RoomCard key={room._id} room={room} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-24 text-center">
                            <div className="w-16 h-16 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                </svg>
                            </div>

                            <h2 className="text-xl font-bold text-slate-800">No Rooms Found</h2>

                            <p className="mt-2 text-sm text-slate-500 max-w-xs">
                                {sParams?.searchTerm
                                    ? <>No results for <span className="font-semibold text-indigo-600">&ldquo;{sParams.searchTerm}&rdquo;</span>. Try a different search term.</>
                                    : 'No study rooms are available right now. Please check back soon.'}
                            </p>

                            {sParams?.searchTerm && (
                                <Link
                                    href="/rooms"
                                    className="mt-6 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
                                >
                                    Explore Rooms
                                </Link>
                            )}
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default RoomsPage;

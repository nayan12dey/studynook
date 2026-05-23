import RoomCard from '@/components/RoomCard';
import { fetchRooms } from '@/lib/data';


const RoomsPage = async() => {
    const rooms = await fetchRooms();
    // console.log(rooms)

    return (
        <div className="bg-slate-50 min-h-screen pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-indigo-600 font-semibold text-xs uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
                        Available Spaces
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mt-5 tracking-tight">
                        Find Your Ideal <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Study Nook</span>
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
                        Browse and reserve premium study rooms tailored for deep focus, team collaboration, and digital learning. Equiped with premium amenities and flexible hourly rates.
                    </p>
                </div>

                {/* Rooms Grid */}
                {
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rooms.map((room) => (
                            <RoomCard key={room._id} room={room} />
                        ))}
                    </div>
                }

            </div>
        </div>
    );
};

export default RoomsPage;

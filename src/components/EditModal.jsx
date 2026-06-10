"use client";


import { authClient } from "@/lib/auth-client";
import { updateRoom } from "@/lib/server-action";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiCheck, FiDollarSign, FiHome, FiImage, FiLayers, FiUsers } from "react-icons/fi";


const AMENITIES_OPTIONS = [
    'Whiteboard',
    'Projector',
    'Wi-Fi',
    'Power Outlets',
    'Quiet Zone',
    'Air Conditioning'
];

export function EditModal({ room: roomData }) {



    const [updatedAmenities, setUpdatedAmenities] = useState([]);



    const toggleAmenity = (amenity) => {
        setUpdatedAmenities(prev =>
            prev.includes(amenity)
                ? prev.filter(a => a !== amenity)
                : [...prev, amenity]
        );
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const session = await authClient.token();
        // console.log(session);


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
            ownerEmail
        } = roomData;



        const room = {
            ...Object.fromEntries(formData.entries()),
            amenities: updatedAmenities,
            ownerEmail: session?.data?.user?.email,
            ownerName: session?.data?.user?.name

        }


        console.log("Form submitted:", room);
        toast.success('Room Updated successfully!');
        e.currentTarget?.reset();
        setUpdatedAmenities([]);


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${_id}`, {
            method: 'PATCH',
            headers: {
                "authorization": `Bearer ${session.data.token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(room)
        })



        const data = await res.json()
        // revalidatePath("/rooms/[id]",page)
        await updateRoom(`${_id}`)
        console.log(data)


    };



    return (
        <Modal>
            <Button
                variant='Secondary' className={"bg-blue-600 text-white"}
            >
                Edit Room
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-2xl overflow-y-auto">
                        <Modal.CloseTrigger />
                        <Modal.Header>

                            <Modal.Heading>Edit Study Room</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Basic Info */}
                                    <div className="space-y-6">
                                        <div>
                                            <label htmlFor="roomName" className="block text-sm font-semibold text-slate-700">Room Name <span className="text-rose-500">*</span></label>
                                            <div className="mt-2 relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <FiHome className="text-slate-400 w-5 h-5" />
                                                </div>
                                                <input
                                                    required
                                                    type="text"
                                                    name="room_name"
                                                    id="room_name"
                                                    defaultValue={roomData.room_name}
                                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50"
                                                    placeholder="e.g., The Quiet Nook"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="description" className="block text-sm font-semibold text-slate-700">Description <span className="text-rose-500">*</span></label>
                                            <div className="mt-2">
                                                <textarea
                                                    required
                                                    name="description"
                                                    id="description"
                                                    defaultValue={roomData.description}
                                                    rows={4}
                                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50 resize-y"
                                                    placeholder="Describe the room, its vibe, and any special rules..."
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="image" className="block text-sm font-semibold text-slate-700">Image URL</label>
                                            <div className="mt-2 relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <FiImage className="text-slate-400 w-5 h-5" />
                                                </div>
                                                <input
                                                    type="url"
                                                    name="room_image"
                                                    id="room_image"
                                                    defaultValue={roomData.room_image}
                                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50"
                                                    placeholder="https://example.com/image.jpg"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                                        <div>
                                            <label htmlFor="floor" className="block text-sm font-semibold text-slate-700">Floor</label>
                                            <div className="mt-2 relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <FiLayers className="text-slate-400 w-5 h-5" />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="floor"
                                                    id="floor"
                                                    defaultValue={roomData.floor}
                                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50"
                                                    placeholder="e.g., 3rd Floor"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="capacity" className="block text-sm font-semibold text-slate-700">Capacity</label>
                                            <div className="mt-2 relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <FiUsers className="text-slate-400 w-5 h-5" />
                                                </div>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    name="seat_capacity"
                                                    id="seat_capacity"
                                                    defaultValue={roomData.seat_capacity}
                                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50"
                                                    placeholder="2-4 people"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="hourlyRate" className="block text-sm font-semibold text-slate-700">Hourly Rate ($)</label>
                                            <div className="mt-2 relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <FiDollarSign className="text-slate-400 w-5 h-5" />
                                                </div>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    step="1"
                                                    name="hourly_rate"
                                                    id="hourly_rate"
                                                    defaultValue={roomData.hourly_rate}
                                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50"
                                                    placeholder="e.g., 5.00"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Amenities */}
                                    <div className="pt-6 border-t border-slate-100">
                                        <label className="block text-sm font-semibold text-slate-700 mb-4">Amenities</label>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {AMENITIES_OPTIONS.map((amenity) => {
                                                const isSelected = updatedAmenities.includes(amenity);
                                                return (
                                                    <div
                                                        key={amenity}
                                                        onClick={() => toggleAmenity(amenity)}
                                                        className={`relative flex items-center p-4 cursor-pointer rounded-xl border-2 transition-all duration-200 select-none ${isSelected
                                                            ? 'border-indigo-600 bg-indigo-50 shadow-sm'
                                                            : 'border-slate-100 bg-white hover:border-indigo-200 hover:bg-slate-50'
                                                            }`}
                                                    >
                                                        <div className={`flex items-center justify-center w-6 h-6 rounded-md mr-3 transition-colors shrink-0 ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-transparent'
                                                            }`}>
                                                            <FiCheck className="w-4 h-4" />
                                                        </div>
                                                        <span className={`text-sm font-medium ${isSelected ? 'text-indigo-900' : 'text-slate-600'}`}>
                                                            {amenity}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <Button type="submit" slot="close" className={"w-full bg-indigo-700 p-5"}>Save</Button>
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
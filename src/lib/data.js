
export const fetchRooms = async (searchTerm = '', amenities = '') => {
    const params = new URLSearchParams();

    if (searchTerm) {
        params.append('search', searchTerm);
    }

    if (amenities.length > 0) {
        params.append('amenities', amenities);
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/rooms?${params.toString()}`
    );

    const data = await res.json();
    return data || [];
};


export const fetchavailableRooms = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/availablerooms`)
    const data = await res.json()
    return data || [];
};
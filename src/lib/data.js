export const fetchRooms = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`)
    const data = res.json()
    return data || [];
};


export const fetchavailableRooms = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/availablerooms`)
    const data = res.json()
    return data || [];
};


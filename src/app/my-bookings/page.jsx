import { auth } from "@/lib/auth";

export const metadata = {
  title: "StudyNook - My Bookings",
  description: "View and manage all your study room bookings.",
};
import { Chip } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";



const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user

    console.log(user)

    const res = await fetch(`http://localhost:5000/booking/${user?.id}`)

    const bookings = await res.json()
    console.log(bookings)


    return (
        <div>
            My Bookings Page
        </div>
    );
};

export default MyBookingsPage;
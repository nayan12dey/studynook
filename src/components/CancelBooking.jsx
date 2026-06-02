"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function CancelBooking({ bookingId }) {
    const router = useRouter();

    const handleCancel = async () => {
        const res = await fetch(`http://localhost:5000/booking/${bookingId}`,{
            method: "PATCH",

        });

        const data = await res.json();

        if (data.modifiedCount > 0 || data.acknowledged) {
            toast.success("Booking cancelled successfully");
            router.refresh();
        } else {
            toast.error("Failed to cancel booking. Please try again.");
        }
    };

    return (
        <AlertDialog>
            <Button
                id={`cancel-booking-${bookingId}`}
                variant="danger"
                className="text-sm font-semibold"
            >
                Cancel Booking
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel this booking?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-slate-600 text-sm">
                                Are you sure you want to cancel this booking? This action
                                cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>

                            <Button
                                slot="close"
                                variant="danger"
                                className="flex-1"
                                onClick={handleCancel}
                            >
                                Yes, Cancel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}

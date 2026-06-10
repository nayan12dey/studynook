
"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteRoom({ room }) {

    const { _id, room_name } = room

    const handleDelete = async () => {


        const session = await authClient.token();
        console.log(session, "from delete room")

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                 "authorization": `Bearer ${session.data.token}`
            }
        })

        const data = await res.json()
        console.log(data)
        toast.error("Room deleted successfully")
        redirect("/rooms")
    }




    return (
        <AlertDialog>
            <Button variant="danger">Delete Room</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Room permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{room_name}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>

                            <Button slot="close" variant="danger" className={"w-full"} onClick={handleDelete}>
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
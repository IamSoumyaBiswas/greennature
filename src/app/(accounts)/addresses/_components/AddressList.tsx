"use client";

import { useRouter } from "next/navigation";
import AddAddressBtn from "./AddAddressBtn";
import EditAddressBtn from "./EditAddressBtn";

function AddressList() {
    const router = useRouter();

    const address = [
        {
            id: "1",
            name: "Home",
            address: "123 Main Street, Springfield, IL",
        },
        {
            id: "2",
            name: "Work",
            address: "456 Elm Street, Chicago, IL",
        },
        {
            id: "3",
            name: "Gym",
            address: "789 Oak Avenue, Naperville, IL",
        },
        {
            id: "4",
            name: "Parents' House",
            address: "101 Pine Street, Bloomington, IL",
        },
        {
            id: "5",
            name: "Favorite Cafe",
            address: "202 Maple Drive, Champaign, IL",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center items-center gap-4">
            <AddAddressBtn onClick={() => router.push("/addresses/add")} />
            {address.map((addr) => (
                <EditAddressBtn
                    key={addr.id}
                    name={addr.name}
                    address={addr.address}
                    onClick={() => router.push(`/addresses/${addr.id}`)} // Navigate to dynamic route
                />
            ))}
        </div>
    );
}

export default AddressList;

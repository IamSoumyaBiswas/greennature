"use client"
import AddLocationIcon from "@/assets/icons/AddLocationIcon";

function AddAddressBtn({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="size-48 rounded bg-slate-100 place-items-center">
      <AddLocationIcon />
    </button>
  );
}

export default AddAddressBtn;

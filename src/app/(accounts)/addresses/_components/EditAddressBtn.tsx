import AddLocationIcon from "@/assets/icons/AddLocationIcon"

function EditAddressBtn({ name, address, onClick }: { name:string, address:string, onClick: () => void }) {
  return (
    <button onClick={onClick} className="size-48 flex flex-col justify-center items-center gap-2 p-4 rounded bg-slate-100 place-items-center ">
      <h1 className="text-xl" >{name}</h1>
      <p className="text-sm line-clamp-2" >{address}</p>
    </button>
  )
}

export default EditAddressBtn
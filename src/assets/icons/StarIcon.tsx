function StarIcon({color="text-red-400"}: {color?:string}) {
  return (
    <svg className={`${color}`} height={16} width={16} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.478 4.554a1 1 0 00.95.69h4.786c.969 0 1.371 1.24.588 1.81l-3.874 2.815a1 1 0 00-.364 1.118l1.478 4.554c.3.921-.755 1.688-1.54 1.118l-3.874-2.815a1 1 0 00-1.176 0l-3.874 2.815c-.784.57-1.839-.197-1.54-1.118l1.478-4.554a1 1 0 00-.364-1.118L2.342 9.98c-.783-.57-.38-1.81.588-1.81h4.786a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
  )
}

export default StarIcon
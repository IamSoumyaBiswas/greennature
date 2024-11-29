
import SideBarMenuItem from './SideBarMenu'

function Sidebar() {
    const sideBarMenu = [
        { id:"1", link: "/profile", name: "Profile"},
        { id:"2", link: "/addresses", name: "Address"},
        { id:"3", link: "/password-management", name: "Password"},
        { id:"4", link: "/orders", name: "Orders"},
    ]
  return (
    <div className="w-full lg:w-80  bg-white">
            <div className="mt-6 space-y-6">
                <h2 className="text-xl font-semibold text-center">User Dashboard</h2>
                    <div className='flex flex-col gap-1' >
                    {
                        sideBarMenu.map((item)=>(
                                <SideBarMenuItem key={item.id} link={item.link} name={item.name} />
                        ))
                    }
                    </div>
            </div>
        </div>
  )
}

export default Sidebar

import SideBarMenuItem from './SideBarMenuItem'

function Sidebar() {
    const sideBarMenu = [
        { id:"1", link: "/profile-management", name: "Profile"},
        { id:"2", link: "/address-management", name: "Address"},
        { id:"3", link: "/password-management", name: "Password"},
        { id:"4", link: "/orders", name: "Orders"},
    ]
  return (
    <div className="w-full lg:w-1/4  bg-white shadow-md">
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">User Dashboard</h2>
                <ul>
                    {
                        sideBarMenu.map((item)=>(<li key={item.id} >
                                <SideBarMenuItem link={item.link} name={item.name} />
                            </li>)
                        )
                    }
                </ul>
            </div>
        </div>
  )
}

export default Sidebar
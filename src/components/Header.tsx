import NavMenu from './header/NavMenu'

function Header() {
  return (
    <header className="inset-x-0 top-0 z-50  w-full border-0 bg-white border-red-500" id="header">
    <div className="border-0 border-slate-700 mx-auto max-w-screen-xl container py-4">
        <NavMenu/>
    </div>
    </header>
  )
}

export default Header
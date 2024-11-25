import ChangePassword from "./_components/ChangePassword"
import ChangePasswordHeader from "./_components/ChangePasswordHeader"

function page() {
  return (
    <div className="w-full bg-white rounded-lg  p-8 space-y-8">
      <ChangePasswordHeader userName="Alexa Rawles" email="alexarawles@gmail.com" profileImageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <ChangePassword />
    </div>
  )
}

export default page
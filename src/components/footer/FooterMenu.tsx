import RecentPost from "./RecentPost"

function FooterMenu() {

  const footerMenu = [
    {
      menuName: "Features",
      links:{
        name: ""
      }
    }
  ]


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:w-3/4  border-0 border-red-500">
      <h4 className="font-medium text-sm text-gray-900 mb-4 border-0 border-teal-600">Features</h4>
      <ul className="border-0">
                                <li><a href="#" class="text-gray-600 hover:text-gray-900 text-xs">E-Money</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-gray-900 text-xs">Local Business</a>
                                </li>
                                <li><a href="#" class="text-gray-600 hover:text-gray-900 text-xs">Corporate</a></li>
                                <li><a href="#" class="text-gray-600 hover:text-gray-900 text-xs">Internet Money</a>
                                </li>
                                <li><a href="#" class="text-gray-600 hover:text-gray-900 text-xs">Staking Ecosystem</a>
                                </li>
                            </ul>
        <RecentPost />
    </div>
  )
}

export default FooterMenu
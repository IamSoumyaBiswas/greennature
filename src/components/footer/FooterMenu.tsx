import FooterMenuItem, { FooterLinkType } from "./FooterMenuItem"
import RecentPost from "./RecentPost"

function FooterMenu() {

  const footerMenu = [
    {
      menuName: "Features",
      links:[
        {
        linkName: "E-Money",
        link: "/e-money",
        },
        {
        linkName: "Local Business",
        link: "/local-business",
        },
        {
        linkName: "Corporate",
        link: "/corporate",
        },
        {
        linkName: "Internet Money",
        link: "/internet-money",
        },
        {
        linkName: "Staking Ecosystem",
        link: "/staking-ecosystem",
        },
      ]
    },
    {
      menuName: "Features",
      links:[
        {
        linkName: "E-Money",
        link: "/e-money",
        },
        {
        linkName: "Local Business",
        link: "/local-business",
        },
        {
        linkName: "Corporate",
        link: "/corporate",
        },
        {
        linkName: "Internet Money",
        link: "/internet-money",
        },
        {
        linkName: "Staking Ecosystem",
        link: "/staking-ecosystem",
        },
      ]
    },
    {
      menuName: "Features",
      links:[
        {
        linkName: "E-Money",
        link: "/e-money",
        },
        {
        linkName: "Local Business",
        link: "/local-business",
        },
        {
        linkName: "Corporate",
        link: "/corporate",
        },
        {
        linkName: "Internet Money",
        link: "/internet-money",
        },
        {
        linkName: "Staking Ecosystem",
        link: "/staking-ecosystem",
        },
      ]
    }
  ]


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:w-3/4  border-0 border-red-500">
      {
        footerMenu.map((item,index)=>(
          <FooterMenuItem key={index} menuName={item.menuName} footerlink={item.links} />
        ))
      }
        <RecentPost />
    </div>
  )
}

export default FooterMenu
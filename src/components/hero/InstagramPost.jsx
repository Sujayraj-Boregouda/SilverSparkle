import { FiBox } from "react-icons/fi"
import { IoIosColorFilter } from "react-icons/io"
import { IoBagRemoveOutline } from "react-icons/io5"
import { MdOutlineLocalShipping } from "react-icons/md"
import { instagramPosts } from "../../assets/database/database";
import { Caption, Title } from "../common/CustomComponents";


const filterDiscoverItems = [
    {
      id: 1,
      title: "15-Day Return & Exchange",
      icon: <IoIosColorFilter size={70} />,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 2,
      title: "925 Sterling Silver",
      icon: <IoBagRemoveOutline size={70} />,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 3,
      title: "Fast Shipping",
      icon: <MdOutlineLocalShipping size={70} />,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 4,
      title: "Always Cadmium Free",
      icon: <FiBox size={70} />,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
];

export const InstagramPost = () => {
  return (
    <>
        <section className="hidden post grid-cols-1 grid md:grid-cols-3 lg:grid-cols-6">
            {instagramPosts.map((post) => (
                <>
                    <div className="h-72 lg:h-80 overflow-hidden" key={post.id}>
                        <img 
                            src={post.image} 
                            alt="insta-post" 
                            className="w-full md:px-8 xl:px-16 h-full object-contain transition-transform ease-in-out hover:-rotate-12 hover:scale-125"
                        />
                    </div>
                </>
            ))}
        </section>
        <FilterDiscover/>
    </>
  )
}


export const FilterDiscover = () => {
    return (
        <>
            <section className="grid-cols-1 grid lg:grid-cols-2 xl:grid-cols-4 bg-white-100">
                {filterDiscoverItems.map((post) => (
                    <>
                        <div className="flex items-center gap-8 p-8 py-12 relative">
                            <div className="icon">
                                <i>{post.icon}</i>
                            </div>
                            <div>
                                <Title>{post.title}</Title>
                                <Caption>{post.description}</Caption>
                                <Title 
                                    level={1}
                                    className="absolute -bottom-5 right-0 opacity-10"
                                >
                                    0{post.id}
                                </Title>
                            </div>
                        </div>
                    </>
                ))}
            </section>
        </>
    )
}
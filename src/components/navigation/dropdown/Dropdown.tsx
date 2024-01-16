
import Link from "next/link";
import { BsChatLeftText } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";

// Dropdown menu items
const DropdownItems = [
    {
        _id: 1,
        title: "Blogs",
        path: "/blogs",
        icon: BsChatLeftText,
    },
    {
        _id: 2,
        title: "Upcoming Events",
        path: "/",
        icon: MdOutlineEventAvailable,
    },
];

const Dropdown = () => {
    return (
        <ul>
            {DropdownItems.map((item: any, _id: any) => {
                return (
                    <li key={_id} className="flex items-center mb-5">
                        <span className="mr-[12px]">
                            <item.icon className="h-[14px] w-[14px]" />
                        </span>
                        <Link href={item.path} className="block">
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Dropdown;
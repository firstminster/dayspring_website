import { FC } from "react";
import { Meta } from ".";
import Navbar from "../navigation/Navbar";


interface Props extends MetaProps {
    children: JSX.Element;
    title: string;
    keywords: string;
    description: string;
}

const Layout: FC<Props> = ({
    children,
    title,
    keywords,
    description,
}) => {
    return (
        <div>
            <Meta title={title} keywords={keywords} description={description} />
            <Navbar />
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default Layout
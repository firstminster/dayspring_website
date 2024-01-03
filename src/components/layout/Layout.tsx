import { FC } from "react";
import { Meta } from "./Meta";
import Navbar from "../navigation/Navbar";
import { Footer } from "..";


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
            <Footer />
        </div>
    )
}

export default Layout
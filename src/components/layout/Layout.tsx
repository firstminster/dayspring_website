import { FC } from "react";
import { Meta } from "./Meta";
import Navbar from "../navigation/Navbar";
import { Footer } from "..";
import { motion } from 'framer-motion'


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
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}>
            <Meta title={title} keywords={keywords} description={description} />
            <Navbar />
            <div className="">
                {children}
            </div>
            <Footer />
        </motion.div>
    )
}

export default Layout
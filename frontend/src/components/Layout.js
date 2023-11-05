import { Navbar } from "./navbar/Navbar";

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

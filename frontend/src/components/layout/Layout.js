import "./layout.scss";

import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";

export const Layout = ({ children }) => {
    return (
        <div className="app">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

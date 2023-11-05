import "./footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1 className="title">Categories</h1>
                    <span className="span">Women</span>
                    <span className="span">Men</span>
                    <span className="span">Shoes</span>
                    <span className="span">Accessories</span>
                    <span className="span">New Arrivals</span>
                </div>
                <div className="item">
                    <h1 className="title">Links</h1>
                    <span className="span">FAQ</span>
                    <span className="span">Pages</span>
                    <span className="span">Stores</span>
                    <span className="span">Compare</span>
                    <span className="span">Cookies</span>
                </div>
                <div className="item">
                    <h1 className="title">About</h1>
                    <span className="span">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eius iste sed nihil alias dolorum, velit eveniet a
                        nisi veniam magnam doloribus ex distinctio at eaque
                        vero, aut ut! Vitae, voluptatem? Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.
                    </span>
                </div>
                <div className="item">
                    <h1 className="title">Contact</h1>
                    <span className="span">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Asperiores sunt nemo velit ducimus hic nostrum
                        dolores enim officiis officia? Voluptatibus harum
                        molestias nostrum sit, dolorum iste quaerat a ipsa
                        laboriosam dignissimos eveniet delectus porro dicta
                        tempora, maxime quam adipisci!
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">DressUp</span>
                    <span className="copyright">
                        © Copyright 2023. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img
                        className="image"
                        src="/images/payment.png"
                        alt="payment"
                    />
                </div>
            </div>
        </div>
    );
};

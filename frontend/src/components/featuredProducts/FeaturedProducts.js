import "./featuredProducts.css";
import { Card } from "../card/Card";

export const FeaturedProducts = ({ type }) => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Hat",
            oldPrice: 19,
            price: 12,
        },
    ];

    return (
        <div className="featuredProducts">
            FeaturedProducts
            <div className="top">
                <h1 className="title">{type} products</h1>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint reprehenderit quas asperiores expedita placeat, nemo
                    repudiandae cumque corporis hic officiis dolores porro
                    voluptatibus velit deleniti deserunt in rem! Recusandae,
                    dolorem exercitationem possimus ducimus nihil veritatis.
                </p>
            </div>
            <div className="bottom">
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

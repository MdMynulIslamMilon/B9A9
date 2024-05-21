import { useEffect, useState } from "react";
import Card from "../Card/Card";
const Estate = () => {
    const [cards, setCard] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/MdMynulIslamMilon/B9A9/main/public/card.json")
            .then(response => response.json())
            .then(data => setCard(data))
    }, []);
    return (
        <div>
            <div className=" my-6">
                <h1 className="text-3xl font-semibold text-[#ff00d3] text-center">Discover our feature listings</h1>
                <p className="text-xl mx-auto lg:w-[950px] mt-2">A real estate business involves buying, selling, managing, operating,
                    or investing in land and buildings. Real estate can also include natural
                    resources below or above the ground, such as crops, minerals, or water.</p>
            </div>
            <div className="grid grid-cols-1   md:grid-cols-2 gap-2 lg:grid-cols-3">
                {
                    cards.map(card => <Card key={card.id} card={card} >

                    </Card>)
                }
            </div>
        </div>
    );
};

export default Estate;
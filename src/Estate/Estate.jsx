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
            <div className="">
                <h1>Discover our feature listings</h1>
                <p>A real estate business involves buying, selling, managing, operating,
                    or investing in land and buildings. Real estate can also include natural
                    resources below or above the ground, such as crops, minerals, or water.</p>
            </div>
            <div className="grid grid-cols-1  justify-center items-center md:grid-cols-2 gap-2 lg:grid-cols-3">
                {
                    cards.map(card => <Card key={card.id} card={card} >

                    </Card>)
                }
            </div>
        </div>
    );
};

export default Estate;
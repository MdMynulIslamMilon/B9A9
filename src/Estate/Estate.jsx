import { useLoaderData } from "react-router-dom";
const Estate = () => {
    const estae = useLoaderData();
    console.log(estae);
    return (
        <div>
         
            <div className="">
                <h1>Discover our feature listings</h1>
                <p>A real estate business involves buying, selling, managing, operating,
                     or investing in land and buildings. Real estate can also include natural 
                     resources below or above the ground, such as crops, minerals, or water.</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Estate;
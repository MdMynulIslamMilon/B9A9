import { FaChartArea, FaLocationDot } from "react-icons/fa6";
import { HiStatusOnline } from "react-icons/hi";

const Card = ({ card }) => {
    const { image, title, description, price, status, area, location, facilities, segment } = card;
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl lg:w-[380px] ">
                <figure>
                    <img
                        src={image}
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h1 className='font-bold text-xl '>{segment}</h1>
                        <h1 className='price badge badge-secondary p-4'>${price} only</h1>
                    </div>
                    <h2 className="card-title">
                        <div className=""> {title}</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions d">
                       <h1 className="flex justify-center items-center"> <FaLocationDot /> {location}</h1>
                       <h1 className="flex justify-center items-center"><FaChartArea></FaChartArea> {area} ft<sup>2</sup></h1>
                        <h1 className="flex justify-center items-center gap-1"><HiStatusOnline></HiStatusOnline>{status}</h1>
                        <button className="badge badge-secondary">View</button>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Card;
import { FaChartArea, FaLocationDot } from "react-icons/fa6";
import { HiStatusOnline } from "react-icons/hi";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
    const { image, title, description, price, status, area, location,  segment } = card;
    return (
        <div  className="card bg-base-100 shadow-xl h-[450px] w-[400px] ">
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
                <p>{
                    description.length >20?
                        <p>{description.slice(0, 28)} <Link 
                            className="font-bold text-blue-600">
                            Read more ..</Link></p>
                        : <p>{description}</p>
                }</p>
                <div className="card-actions ">
                    <h1 className="flex justify-center items-center"> <FaLocationDot /> {location}</h1>
                    <h1 className="flex justify-center items-center"><FaChartArea></FaChartArea> {area} ft<sup>2</sup></h1>
                    <h1 className="flex justify-center items-center gap-1"><HiStatusOnline></HiStatusOnline>{status}</h1>
                   <Link to="/CardDetails"> <button className="badge badge-primary p-3">View</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Card;
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChartArea, FaLocationDot } from "react-icons/fa6";
import { HiStatusOnline } from "react-icons/hi";
const CardDetails = () => {
    const {id} = useParams();
    const [data,setData] = useState();
    const [item,setItem] = useState('')
    useEffect(() => {
       if(id){
        fetch("https://raw.githubusercontent.com/MdMynulIslamMilon/B9A9/main/public/card.json")
        .then(response => response.json())
        .then(data =>{
            setData(data)
            const foundItem = data.find((datam)=> datam.id === id);
            setItem(foundItem);
        } )
        .catch(error =>console.log(error))
       }
    }, [id]);

    return (
        <div> 
            <Navbar></Navbar>
            <div  className="card flex bg-base-100 shadow-xl h-[450px] w-[400px] mx-auto my-4">
            <figure>
                <img
                    src={item.image}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h1 className='font-bold text-xl '>{item.segment}</h1>
                    <h1 className='price badge badge-secondary p-4'>${item.price} only</h1>
                </div>
                <h2 className="card-title">
                    <div className=""> {item.title}</div>
                </h2>
                <p>{item.description}</p>
                <div className="card-actions ">
                    <h1 className="flex justify-center items-center"> <FaLocationDot /> {item.location}</h1>
                    <h1 className="flex justify-center items-center"><FaChartArea></FaChartArea> {item.area} ft<sup>2</sup></h1>
                    <h1 className="flex justify-center items-center gap-1"><HiStatusOnline></HiStatusOnline>{item.status}</h1>
                </div>
            </div>
        </div>


            <Footer></Footer>
        </div>
    );
};

export default CardDetails;
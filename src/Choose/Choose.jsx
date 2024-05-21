import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { GiHomeGarage } from 'react-icons/gi';
import { TbHome2, TbHomeInfinity } from 'react-icons/tb';

const Choose = () => {
    return (
        <div className='mb-4 mt-8 '>
            <div className='text-center my-3'>
                <h1 className='text-3xl text-[#ff00d3]'>Our services</h1>
                <h1 className='text-xl'>What we do ?</h1>
            </div>
            <div className='grid  gap-2 mx-2 md:grid-cols-2 lg:grid-cols-3'>
                <div className='bg-base-300 shadow-xl pl-5 pt-3 rounded-lg'>
                    <div className='text-3xl'><TbHome2></TbHome2></div>
                    <h1 className='text-3xl text-[#4a00ff]'>Buy a New Home ?</h1>
                    <p className='text-xl'>Discover your dream home effotlessly . expplore diverse propertity and expert guidance for a seamless buing experience</p>

                </div>
                <div className='bg-base-300 shadow-xl pl-4 pt-3 rounded-lg'>
                    <div className='text-2xl'><  GiHomeGarage /></div>
                    <h1 className='text-3xl text-[#4a00ff]'>Rent a home ?</h1>
                    <h1 className='text-xl'>Total combined gross monthly income must be at least two and a half (2.5) times the amount of monthly rent (e.g. $700 monthly rent x 2.5 = $1,750 monthly income)</h1>
                </div>
                <div className='bg-base-300 shadow-xl pl-4 pt-3 rounded-lg'>
                    <div className='text-2xl'><TbHomeInfinity></TbHomeInfinity></div>
                    <h1 className='text-3xl text-[#4a00ff]'>Sell a home</h1>
                    <h1 className='text-xl'>Gorgeous 4-bedroom, 2-bathroom home in beautiful Silver Lake. This property offers 1,160 square feet of living space and a lot size of 5,499 square feet. Your family and loved ones will enjoy  </h1>
                </div>
            </div>

        </div>
    );
};

export default Choose;
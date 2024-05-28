import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppliCart = ({ appliedJob }) => {

    const { image_url, product_name, company_name, job_type, location, salary_range } = appliedJob;

    const nav = useNavigate()
    const showDetails = () => {
        nav("/jobdetails", { state: { detail: appliedJob } })
    }

    return (
        <div className='border my-2 p-6 rounded-md'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <div className='size-60 rounded-md bg-gray-100 flex items-center justify-center'>
                        <img className='rounded-md w-40' src={image_url} alt="" />
                    </div>
                    <div className='leading-8'>
                        <h2 className='font-bold'>{product_name}</h2>
                        <p className='text-gray-500'>{company_name}</p>
                        <p>Job type <span className='border border-purple-500 px-2 py-1 rounded'> {job_type}</span></p>
                        <p>{location}. {salary_range}</p>
                    </div>
                </div>
                <button className='bg-purple-500 px-4 py-2 rounded-md text-white' onClick={showDetails}>View details</button>
            </div>
        </div>
    );
};

export default AppliCart;
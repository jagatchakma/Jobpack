import React, { createContext, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export const MyContex = createContext()

const JobCart = ({ job }) => {
    // MyContex = job;
    // console.log(MyContex.company_name);
    const { image_url, product_name, company_name, job_type, location, salary_range } = job;
    // console.log(product_name)

    const nav = useNavigate()
    const onClickPage = () => {
        nav("/jobDetails", {state: {detail: job}});
    }

    return (
            <div className='text-left p-6 border'>
                <img className='rounded-md' width="100px" src={image_url} alt="" />
                <h3 className='text-2xl font-bold py-2'>{product_name}</h3>
                <p>{company_name}</p>
                <p className='my-4'>JobType: <span className='border border-gray-400 rounded-md px-2 py-2 text-purple-500 font-bold ml-2'>{job_type}</span></p>
                <p className='py-2'>
                    <FontAwesomeIcon className='text-purple-500' icon={faLocation} />
                    {" "}{location}{" "}
                    <FontAwesomeIcon className='text-purple-500' icon={faLocation} />
                    {" Salary : "}{salary_range}
                </p>
                {/* <Link to="/jobDetails"> <button className='bg-purple-500 mt-4 px-6 py-3 rounded-md text-white font-bold' onClick={"/jobDetails"}>View Details</button></Link> */}
                <button className='bg-purple-500 mt-4 px-6 py-3 rounded-md text-white font-bold' onClick={onClickPage} >View Details</button>
            </div>
    );
};

export default JobCart;

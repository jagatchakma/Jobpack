import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useLoaderData } from 'react-router-dom';
import AppliCart from './AppliCart/AppliCart';

const AppliedJobs = () => {
    // ..............................for testing using loader data as applied data
    const appliedData = useLoaderData();
    // ............................................................
    return (
        <div className='w-9/12 m-auto '>
            <section className='my-20'>
                <h2 className='font-bold text-5xl'>Applied Jobs</h2>
            </section>
            <section className='text-right my-32'>
                <button className='bg-gray-200 px-6 py-4 rounded-xl my-6'>
                    Filter by
                    <FontAwesomeIcon className='text-gray-700 pl-2' icon={faArrowDown} />
                </button>
                <div className='text-left'>
                    {
                        appliedData.map(appliedJob => <AppliCart key={appliedJob.job_id} appliedJob={appliedJob}></AppliCart>)
                    }
                </div>
            </section>
        </div>
    );
};

export default AppliedJobs;
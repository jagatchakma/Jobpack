import React, { createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowLeft } from 'react-icons/fa';
import { faArrowLeft, faTicket } from '@fortawesome/free-solid-svg-icons';
import { useLoaderData } from 'react-router-dom';
import JobCart from './JobCart/JobCart';
import Footer from '../../Footer/Footer';


const Home = () => {
    const jobdata = useLoaderData();

    return (
        <div className='w-9/12 m-auto'>
            <section className='flex justify-between items-center'>
                <div>
                    <h2 className='text-4xl font-bold tracking-widest'>One step
                        <br></br> Closer To Your
                        <br></br>
                        <span className=' text-transparent bg-clip-text bg-gradient-to-l from-indigo-500 to-pink-500'>Dream job</span>
                    </h2>
                    <p >Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it.  Manage all <br /> your job application from start to finish.</p>
                    <button className='p-3 my-5 bg-purple-700 rounded-md text-white font-bold text-lg'>Get Started</button>
                </div>
                <img className='w-1/2 rounded-xl' src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg" alt="" />
            </section>
            <section className='py-20 text-center'>
                <h2 className='text-4xl font-bold'>Job Category List</h2>
                <p className='text-zinc-400'>Explore thousands of job opportunities with all the information you need. Its your future </p>
                <div className='flex gap-4 py-10 text-left'>
                    {/* <p className='text-bold text-4xl'> <FontAwesomeIcon icon={faTicket} /></p> */}
                    <div className='bg-violet-100 p-6 rounded-md size-full'>
                        <div className='bg-violet-200 p-4 text-4xl'>
                            <FontAwesomeIcon className='text-purple-500' icon={faTicket} />
                        </div>
                        <div className='pt-6'>
                            <h2>Account &finance</h2>
                            <p><small>300 jobs Availavle</small></p>
                        </div>
                    </div>
                    <div className='bg-violet-100 p-6 rounded-md size-full'>
                        <div className='bg-violet-200 p-4 text-4xl'>
                            <FontAwesomeIcon className='text-purple-500' icon={faTicket} />
                        </div>
                        <div className='pt-6'>
                            <h2>Account &finance</h2>
                            <p><small>300 jobs Availavle</small></p>
                        </div>
                    </div>
                    <div className='bg-violet-100 p-6 rounded-md size-full'>
                        <div className='bg-violet-200 p-4 text-4xl'>
                            <FontAwesomeIcon className='text-purple-500' icon={faTicket} />
                        </div>
                        <div className='pt-6'>
                            <h2>Account &finance</h2>
                            <p><small>300 jobs Availavle</small></p>
                        </div>
                    </div>
                    <div className='bg-violet-100 p-6 rounded-md size-full'>
                        <div className='bg-violet-200 p-4 text-4xl'>
                            <FontAwesomeIcon className='text-purple-500' icon={faTicket} />
                        </div>
                        <div className='pt-6'>
                            <h2>Account &finance</h2>
                            <p><small>300 jobs Availavle</small></p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured jobs */}
            <section className='text-center'>
                <h2 className='text-4xl font-bold'>Featured Jobs</h2>
                <p className='text-zinc-400'><small>Expore thousands of job opportunities with all the information you need. Its your future </small></p>
                <div className='grid grid-cols-2 gap-4
                 my-12'>
                    {
                        jobdata.map(job => <JobCart key={job.job_id} job={job}></JobCart>)
                    }
                </div>
                <button className='bg-purple-500 px-6 py-4 mb-10 rounded-md text-white font-bold'>See All Jobs</button>
            </section>
            {/* <section className='bg-black'>
                <Footer></Footer>
            </section> */}
        </div>
    );
};

export default Home;

// inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
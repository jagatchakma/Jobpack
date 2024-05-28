import React, { useContext } from 'react';
import { MyContex } from '../Home/JobCart/JobCart';
import { useLocation } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faCalendarDay, faPhone, faMailReply, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const JobDetails = () => {
    const data = useLocation()
    const jobDetail = data.state.detail;

    // console.log(jobDetail.product_name);
    const {
        job_id,
        image_url,
        product_name,
        company_name,
        job_type,
        location,
        salary_range,
        job_description,
        job_responsibilities,
        education_background,
        experience,
        company_contact
    } = jobDetail

    return (
        <div>
            <div className='bg-slate-100'>
                <div className='w-9/12 m-auto'>
                    <Header></Header>
                </div>
                <h1 className='text-5xl font-bold w-9/12 m-auto py-20'>Job Details</h1>
            </div>
            <section className='my-56 w-9/12 m-auto flex'>
                <div className='w-full'>
                    <p><span className='font-bold'>Experience:</span> {job_description}</p>
                    <br />
                    <p><span className='font-bold'>Job Responsibility:</span> {job_responsibilities}</p>
                    <br />
                    <p className='my-6 font-bold'>Education Requirements:</p>
                    <p>{education_background}</p>
                    <p className='my-6 font-bold'>Expriences:</p>
                    <p>{experience}</p>
                    <p className='py-6'><span className='font-bold'>Location: </span> {location}</p>
                    <p><span className='font-bold'>Salary range : </span>{salary_range}</p>

                </div>
                <div className='w-6/12'>
                    <div className=' bg-slate-300 p-10 rounded-md'>
                        <p className='text-xl font-bold mb-2'>Job Detils</p>
                        <ul></ul>
                        <div className='leading-8'>
                            <p><span className='font-bold'>Company name:</span> {company_name}</p>
                            <p>
                                <FontAwesomeIcon className='text-purple-600 pr-2' icon={faDollar} />
                                Salary: {salary_range}
                            </p>
                            <p>
                                <FontAwesomeIcon className='text-purple-600 pr-2' icon={faCalendarDay} />
                                <span className='font-bold'>Job title:</span> {product_name}
                            </p>
                            <p><span className='font-bold'>Job type:</span> {job_type}</p>
                        </div>

                        <br />
                        <p><span className='text-xl font-bold'>Contact Information</span></p>
                        <ul></ul>
                        <div className='leading-8'>
                            <p>
                                <FontAwesomeIcon className='text-purple-600 pr-2' icon={faPhone} />
                                <span className='font-bold'>Phone: </span> {company_contact.phone }</p>
                            <p>
                                <FontAwesomeIcon className='text-purple-600 pr-2' icon={faMailReply} />
                                <span className='font-bold'>Email: </span> {company_contact.email }</p>
                            <p>
                                <FontAwesomeIcon className='text-purple-600 pr-2' icon={faAddressCard} />
                                <span className='font-bold'>Address: </span> {location }</p>
                        </div>
                    </div>
                    <button className='my-3 bg-purple-500 py-5 w-full rounded-md text-white hover:bg-green-500 hover:font-bold'>Apply Now</button>
                </div>
            </section>
            <section className='bg-black'>
                <div className="w-9/12 m-auto">
                    <Footer></Footer>
                </div>
            </section>
        </div>
    );
};

export default JobDetails;
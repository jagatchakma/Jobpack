import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowLeft } from 'react-icons/fa';
import { faArrowLeft, faTicket } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <section className='bg-black text-white text-center py-20 grid grid-cols-6 gap-4'>
                <div className='col-span-2 px-6'>
                    <h3 className='text-2xl font-bold'>JobHat</h3>
                    <p><small>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</small></p>
                    <div className='flex gap-3 justify-center mt-4'>
                        <FontAwesomeIcon className='bg-white text-purple-600 p-3 rounded-full' icon={faArrowLeft} />
                        <FontAwesomeIcon className='bg-white text-purple-600 p-3 rounded-full' icon={faArrowLeft} />
                        <FontAwesomeIcon className='bg-white text-purple-600 p-3 rounded-full' icon={faArrowLeft} />
                    </div>
                </div>
                <div className='px-6'>
                    <p className='text-2xl mb-2'>loren5</p>
                    <p>loren5</p>
                    <p>loren5</p>
                    <p>loren5</p>
                    <p>loren5</p>
                </div>
                <div className='px-6'>
                    <p className='text-2xl mb-2'>loren5</p>
                    <p>loren5</p>
                    <p>loren5</p>
                    <p>loren5</p>
                    <p>loren5</p>
                </div>
                <div className='px-6'>
                    <p className='text-2xl mb-2'>loren5</p>
                    <p>loren5</p>
                    <p>loren5</p>
                    <p>loren5</p>
                    <p>loren5</p>
                </div>
                <div className='px-6'>
                    <p className='text-2xl mb-2'>loren5</p>
                    <p>loren5</p>
                    <p>loren5</p>
                    <p>loren5</p>
                    <p>loren5</p>
                </div>
            </section>
        </div>
    );
};

export default Footer;
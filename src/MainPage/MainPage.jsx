import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainPage = () => {
    return (
        <div className=''>
            <section className=''>
                <div className='w-9/12 m-auto'>
                    <Header></Header>
                </div>
            </section>
            <Outlet></Outlet>
            <section className='bg-black'>
                <div className='w-9/12 m-auto'>
                    <Footer></Footer>
                </div>
            </section>
        </div>
    );
};

export default MainPage;

// w-5/6 m-auto
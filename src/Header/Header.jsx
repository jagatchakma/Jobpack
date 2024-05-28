import React from 'react';
import { Link } from 'react-router-dom';
<style>
</style>

const Header = () => {
    return (
        <div className='flex justify-between items-center py-10 '>
            <h2 className='font-bold text-4xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'><Link>JOBPACK</Link></h2>
            <div className='headerLink p-2'>
                <Link className='p-6 text-indigo-700 font-bold ' to="/statistics">Statistics</Link>
                <Link className='p-6' to="/appliedjobs">Applied Jobs</Link>
                <Link className='p-6' to="/blog">Blog</Link>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-lg'>Start Applying</button>
        </div>
    );
};

export default Header;
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-center items-center py-10'>
                <div>
                    <img src="img/logo.png" className="img-nav-logo" alt="" />{" "}
                </div>
                <div>
                    <ul className='flex  space-x-8 text-slate-950 text-3xl font-semibold cursor-pointer'>
                        <li className='group hover:text-green-600'>
                            <span>Concerts</span>
                            <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                        </li>
                        <li className='group hover:text-green-600'>
                            <span>Movie & Drama</span>
                            <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                        </li>
                        <li className='group hover:text-green-600'>
                            <span>Games</span>
                            <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                        </li>
                    </ul>
                </div>
                <div className='mx-20'>
                    <button className='px-10 py-3 bg-green-600 rounded-full text-white hover:outline-amber-500 hover:bg-amber-500 hover:transition hover:ease-out hover:duration-500'>
                        <span className=''>Login</span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default Navbar
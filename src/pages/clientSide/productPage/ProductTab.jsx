import React, { useState } from 'react';
import { GiGemChain, GiBrainTentacle } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";

const ProductTab = () => {

    const [showingSolutions, setShowingSolutions] = useState('Solutions')

    const solutionsStyle = (name) => `transition-all duration-300 md:flex items-center gap-10 mt-12  ${showingSolutions === name ? 'opacity-100 z-10' : 'opacity-0'}`
    const buttonStyle = `flex items-center px-4 gap-2 my-10 ml-[10%] mr-[-70px] py-4 rounded-lg  hover:bg-text_primari transition-all duration-300 active:scale-90 cursor-pointer`

    return (
        <div className='w-11/12 grid grid-cols-1 lg:grid-cols-3 mx-auto shadow-2xl  lg:gap-5 p-2 xl:pb-10'>
            <div className='bg-[#004080]   w-[85%] relative -top-12 -left-6 text-white md:-top-10 md:-left-10 rounded-lg '>
                <div onClick={() => setShowingSolutions('Solutions')} className={`${buttonStyle} ${showingSolutions === 'Solutions' && 'bg-text_primari'}`}>
                    <GiGemChain className='text-2xl'></GiGemChain>
                    <button className='text-xl'>Solutions</button>
                </div>

                <div onClick={() => setShowingSolutions('Infrastructure')} className={`${buttonStyle} ${showingSolutions === 'Infrastructure' && 'bg-text_primari'}`}>
                    <GiBrainTentacle className='text-2xl'></GiBrainTentacle>
                    <button className='text-xl'>Infrastructure</button>
                </div>

                <div onClick={() => setShowingSolutions('Platforms')} className={`${buttonStyle} ${showingSolutions === 'Platforms' && 'bg-text_primari'}`}>
                    <FaComputer className='text-2xl'></FaComputer>
                    <button className='text-xl'>Platforms</button>
                </div>

                <div onClick={() => setShowingSolutions('Friendly Support')} className={`${buttonStyle} ${showingSolutions === 'Friendly Support' && 'bg-text_primari'}`}>
                    <IoPersonAdd className='text-2xl'></IoPersonAdd>
                    <button className='text-xl text-start'>Friendly Support</button>
                </div>

            </div>

            <div className='md:col-span-2'>
                <div className={`${solutionsStyle('Solutions')} `}>
                    <div className="grid grid-cols-3  border">
                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>

                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>


                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>

                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>
                    </div>
                </div>

                <div className={`${solutionsStyle('Infrastructure')} `}>
                    <div className="grid grid-cols-3  border">
                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>

                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>


                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>

                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>
                    </div>
                </div>


                <div className={`${solutionsStyle('Platforms')} `}>
                    <div className="grid grid-cols-3  border">
                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>

                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>


                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>

                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>
                    </div>
                </div>

                <div className={`${solutionsStyle('Friendly Support')} `}>
                    <div className="grid grid-cols-3  border">
                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>

                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>


                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>

                        <div className="card bg-base-100  shadow-xl border">
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                            </div>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                        </div>
                    </div>
                </div>

                


            </div>

        </div>
    );
};

export default ProductTab;
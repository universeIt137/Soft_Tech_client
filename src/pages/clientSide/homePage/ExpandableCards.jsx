import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoInstagram, logoFacebook, logoTwitter, logoLinkedin } from 'ionicons/icons';


const ExpandableCards = () => {
    const cards = [
        {
            name: "Emma Watson",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725537856/Universe%20Soft%20Tech/portfolioPage/q2nnxeoele8zh1dhbmjn.png",
            movies: ["Harry Potter", "Beauty and the Beast"],
        },
        {
            name: "De Caprio",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725706680/Universe%20Soft%20Tech/Homepage/arxlwbefeftpoje8foqs.png",
            movies: ["Titanic", "The Wolf of Wall Street"],
        },
        {
            name: "Selena Gomez",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725537856/Universe%20Soft%20Tech/portfolioPage/q2nnxeoele8zh1dhbmjn.png",
            movies: ["Getaway", "Monte Carlo"],
        },
        {
            name: "Tom Cruise",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725706679/Universe%20Soft%20Tech/Homepage/mvfelsdxbcmcbj0t1qfl.png",
            movies: ["Top Gun", "Mission Impossible"],
        },
        {
            name: "Kristen Stewart",
            image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725537856/Universe%20Soft%20Tech/portfolioPage/q2nnxeoele8zh1dhbmjn.png",
            movies: ["Twilight", "Underwater"],
        },
    ];

    return (
        <>
            <p className='  text-3xl text-center lg:mt-20 font-bold'>Have a look<br /> <span className='text-text_primari font-bold text-5xl'>Our top 5 projects</span></p>

            <div className="flex my-5 justify-center items-center py-5 bg-gradient-to-r from-universe_primary to-universe_secondary">
                <div className="flex">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`relative  w-52 h-[500px] bg-cover bg-center rounded-lg  overflow-hidden transition-all duration-500 hover:w-96 cursor-pointer`}
                            style={{ backgroundImage: `url(${card.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-b-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute w-72 px-8 bottom-8 translate-x-full opacity-0 hover:translate-x-0 hover:opacity-100 transition-all duration-500 text-white">
                                <h3 className="text-2xl text-yellow-300">{card.name}</h3>
                                <h4 className="text-lg text-gray-400">Follow</h4>
                                <div className="flex space-x-4 my-4">
                                    <p className='text-white'>This is work</p>
                                </div>
                                <h2 className="text-purple-300">Movies</h2>
                                <div>
                                    {card.movies.map((movie, i) => (
                                        <p key={i}>{movie}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ExpandableCards;

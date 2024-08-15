import { Link } from "react-router-dom";
import { FcLikePlaceholder } from "react-icons/fc";



const Career = () => {
    return (
        <div className='bg-[#EEEEEE] inter '>
            <div className="container mx-auto px-10 lg:px-0 py-12">
                {/* jobs & pages */}
                <div className="flex lg:justify-between flex-col lg:flex-row  gap-5 justify-start">
                    <div className="flex items-center">
                        <h2 className="text-xl text-black font-bold pr-2.5 mr-2.5 border-r-2 border-r-[#b3b3b3]">297 jobs</h2>
                        <h2 className=" text-[#595959] font-bold">555+ Vacancies</h2>
                    </div>

                    <div className="flex gap-2  items-center ">
                        <h2 className="text-xl font-medium">Pages :</h2>
                        <div className="flex gap-3 text-xl *:font-bold items-center">
                        <Link to={`/1`} className="text-[#d10000]">1</Link>
                             <Link to={`/2`}>2</Link> 
                              <Link to={`/3`}>3</Link> 
                               <Link to={`/4`}>4</Link>
                               <Link to={`/5`}>5</Link> 
                             <span>...</span>
                                         
                        </div>
                    </div>

                </div>

                {/* filters */}
                <div className="my-10 bg-white flex justify-between rounded-md flex-col md:flex-row lg:flex-row text-center">
                    <div>
                        <button className="bg-[#424242] text-white py-4 px-4 after:content-['']   after:w-6 after:h-5 after:bg-[#424242] rounded-sm after:absolute relative z-20 after:-bottom-2 after:rotate-45 after:left-1/2 lg:after:left-auto lg:after:bottom-auto lg:after:translate-x-0  after:-translate-x-1/2 w-full lg:w-auto md:w-auto md:after:left-auto md:after:bottom-auto md:after:translate-x-0">Active filters</button>
                        <input type="text"  className="ml-8 outline-none py-5 md:py-0 lg:py-0"/>
                       
                    </div>
                    <div className="flex items-center lg:pr-16 md:pr-8 justify-center ">
                    <button className="flex items-center gap-2"><FcLikePlaceholder className="text-2xl"></FcLikePlaceholder>
                    Save as Favourite
                    </button>
                    </div>

                </div>


            </div>
            
        </div>
    );
};

export default Career;
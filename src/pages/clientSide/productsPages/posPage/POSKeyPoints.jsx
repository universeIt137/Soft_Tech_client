import { TbArrowsTransferDown } from 'react-icons/tb';
import { MdWarehouse } from 'react-icons/md';
import { FaScaleBalanced } from 'react-icons/fa6';

const POSKeyPoints = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-40 w-11/12 mx-auto my-10" data-aos="fade-up" >
                <div className="lg:text-2xl border flex justify-center items-center gap-4 py-14 rounded-2xl shadow-xl text-gray-400">
                <p className='text-black p-4 bg-gray-400 rounded-2xl'><TbArrowsTransferDown /></p>
                    <p>Seamless Transactions</p>
                </div>

                <div className="lg:text-2xl border flex justify-center items-center gap-4 py-14 rounded-2xl shadow-xl text-gray-400">
                <p className='text-black p-4 bg-gray-400 rounded-2xl'><MdWarehouse /></p>
                    <p>Inventory Optimization</p>
                </div>

                <div className="lg:text-2xl border flex justify-center items-center gap-4 py-14 rounded-2xl shadow-xl text-gray-400">
                <p className='text-black p-4 bg-gray-400 rounded-2xl'><FaScaleBalanced /></p>
                    <p>Scalability Customization</p>
                </div>
                
            </div>
        </div>
    );
};

export default POSKeyPoints;


const NewsLetter = () => {
    return (
        <div className="bg-bg_btn_light">
            <div className="container mx-auto py-20 px-10 lg:px-0">
                <div className="text-center space-y-4">
                   <div className="w-32 text-center mx-auto">
                        <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1723572116/newsletter_c7kt6v.gif" alt="" />
                   </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-center ">Subscribe to our Newsletter</h2>
                    <p className="opacity-95">To Get the Latest News About Our Latest Products and Services</p>
                    <div className="flex justify-center items-center">
                         <input type="email" className="rounded-l-lg	 p-5 w-[40%]"  placeholder="Enter your Email"/>
                         <button className="p-5 bg-[#2980b9] hover:bg-[#0E7A7A] rounded-r-lg text-white">Subscribe</button>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default NewsLetter;
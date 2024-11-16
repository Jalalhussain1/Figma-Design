
import sunIcon from '../assets/sunIcon.png';
import vector from '../assets/vector.svg';
import Shape1 from '../assets/shape1.svg';
import Shape from '../assets/shape.svg';
import Group from '../assets/group.png';

function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row items-center bg-white">
            {/* Left Side */}
            <div className="space-y-4 px-6 py-10 md:p-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold">Discover New</h2>
                <div className="flex items-center space-x-3">
                    <h2 className="text-3xl md:text-5xl font-bold">Collection</h2>
                    <span className="flex px-2 md:px-3 py-1 md:py-1.5 bg-yellow-500 rounded-full justify-items-start">
                        <img src={sunIcon} alt="Sun Icon" className="w-4 h-4 mr-1" />
                    </span>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                    <div className="w-16 md:w-28 h-[2px] bg-[#494747] mt-1"></div>
                    <div className="text-gray-600 text-sm md:text-base">
                        <p>Fashion is part of the daily air</p>
                        <p>and it changes all the time,</p>
                        <p>with all the events.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Left Bottom Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-6">
                            <p className="text-3xl md:text-5xl">#01</p>
                            <button className="px-4 py-2 bg-yellow-500 text-white rounded">
                                Start Shopping
                            </button>
                        </div>
                        <div className="flex items-center gap-5 py-5">
                            <div className="flex -space-x-1 overflow-hidden">
                                <img
                                    src="https://randomuser.me/api/portraits/men/1.jpg"
                                    alt="reviewer"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/women/2.jpg"
                                    alt="reviewer"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/men/3.jpg"
                                    alt="reviewer"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                            </div>
                            <div>
                                <p className="text-sm">15K Well</p>
                                <p className="text-sm">Reviews</p>
                            </div>
                        </div>
                    </div>
                    {/* Right Bottom Section */}
                    <div className="flex flex-col justify-center items-center ">
                        <img src={vector} alt="Vector" className="w-16 md:w-auto" />
                        <h2 className="text-3xl md:text-5xl">25%</h2>
                        <p className="text-sm md:text-base">Off New Arrivals</p>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 h-auto md:h-[600px] flex  flex-col gap-24 items-end p-32  justify-between  bg-[#FBFAF3]   ">
                {/* Top-Right Corner Elements */}
                <div className=" flex flex-col items-center relative">
                    <img
                        src={Shape1}
                        alt="Shape 1"
                        className=""
                    />
                    <img
                        src={Shape}
                        alt="Shape 2"
                        className=" absolute top-[44px] md:right-[25px] right-[65px] sm:mr-0 md:mr-8 lg:mr-10 ab"
                    />
                </div>

                {/* Central Content */}
                <div className="flex  gap-5">
                    <img src={Group} alt="" />

                </div>
            </div>
        </section>
    );
}

export default HeroSection;
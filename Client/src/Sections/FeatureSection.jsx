import { features } from "../Constants"
const FeatureSection = () => {
    return (
        <section id="features" >
        <div className="relative mt-10 border-b border-neutral-900 min-h-[500px]">
            <div className=" text-center">
                <h2 className="text-3xl sm:text-5xl  lg:text-6xl mt-18 lg:mt-20 tracking-wide">
                    <span className="bg-gradient-to-r to-[#00E3F8] from-[#9ee0e6] text-transparent bg-clip-text">Brilliance Beyond the Browser</span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-20 lg:mt-20">
                {features.map((feature, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="flex ">
                            <div className="flex mx-6 h-14 w-14 p-3 bg-neutral-900 text-[#00E3F8] justify-center items-center rounded-full">
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">
                                    {feature.text}
                                </h5>
                                <p className=" p-2 mb-20 text-neutral-600 ">{feature.description} </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div></section>
    )
}

export default FeatureSection
import { CheckCircle } from "lucide-react"
import { pricingOptions } from "../Constants"
const Pricing = () => {
    return (
        <section id="pricing" >

        <div className="mt-10">
            <h2 className="bg-gradient-to-r py-2 to-[#00E3F8] text-transparent bg-clip-text from-[#9ee0e6] text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider ">
                Pricing
            </h2>
            <div className="flex  flex-wrap">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-800 rounded-xl">
                            <p className="text-xl mb-8">
                                {option.title}
                                {option.title === "Web Development" && <span className="bg-gradient-to-r to-[#00E3F8] font-bold from-[#9ee0e6] text-transparent bg-clip-text text-lg ml-2 mb-4">(Most Popular)</span>}
                            </p>
                            <p className="mb-8">
                                <span className="text-2xl mt-6 ">{option.price}</span>
                            </p>
                            <ul>{option.features?.map((feature, index) => (
                                <li key={index} className="mt-8 flex items-center">
                                    <CheckCircle className="text-[#00E3F8]" size={16} />
                                    <span className="ml-2"> {feature}</span>
                                </li>
                            ))}</ul>
                            <a href="#" className="inline-flex justify-center items-center w-full h-12 mt-20 tracking-tight text-lg text-[#00E3F8] hover:bg-[#00E3F8] font-semibold hover:text-black  border border-[#00E3F8] rounded-lg transition duration-200">Get Started</a>
                        </div>
                    </div>
                )
                )}
            </div>
        </div></section>
    )
}

export default Pricing
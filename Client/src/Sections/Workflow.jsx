import { CheckCircle2 } from "lucide-react"
import { checklistItems } from "../Constants"
import logo from '../assets/images/work.png'
const Workflow = () => {
    return (
        <section id="workflow" >

            <div className="mt-10 ">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide ">Our Work
                    <span className="bg-gradient-to-r to-[#00E3F8] from-[#9ee0e6] text-transparent bg-clip-text"> Your Advantage</span>
                </h2>
                <div className="flex flex-wrap justify-center ">
                    <div className=" p-2 w-full lg:w-1/2">
                        <img src={logo} alt="Our work" />
                    </div>
                    <div className="pt-12 w-full lg:w-1/2">
                        {checklistItems.map((item, index) => (
                            <div key={index} className="flex mb-12">
                                <div className="flex  text-[#00E3F8] mx-6 bg-neutral-900 h-10 w-10 p-2  items-center justify-center rounded-full">
                                    <CheckCircle2 />
                                </div>
                                <div >
                                    <h5 className="mt-1 mb-2 text-xl">{item.title} </h5>
                                    <p className=" text-md text-neutral-600">{item.description}</p>
                                </div>

                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
            </section>
    )
}

export default Workflow
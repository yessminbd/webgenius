import { testimonials } from "../Constants"

const Testimonials = () => {
    return (
        <section id="testimonials" >
            <div className="mt-10  tracking-wide">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What people are saying  </h2>
                <div className="flex flex-wrap justify-center">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className=" w-full sm:w-1/2 px-4 lg:w-1/3 py-2">
                            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-700 font-thin ">
                                <div className="flex mt-2 items-center">
                                    <img src={testimonial.image} alt={testimonial.user} className="w-12 h-12 mr-6 rounded-full border border-r-neutral-300  " />
                                    <div>
                                        <h6 className="text-lg font-bold">{testimonial.user}</h6>
                                    </div>
                                </div>
                                <p className="mt-6 text-neutral-200">{testimonial.text}</p>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section >

    )
}

export default Testimonials
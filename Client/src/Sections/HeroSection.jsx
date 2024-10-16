import { Link } from "react-router-dom"
import video1 from "../assets/videos/video1.mp4"
import video2 from "../assets/videos/video2.mp4"

const HeroSection = () => {
    return (
        <>
            <section id="home" >

                <div className="flex flex-col mt-3 items-center lg:mt-20">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">Empowering Your
                        <span className=" font-bold bg-gradient-to-r to-[#00E3F8] from-[#9ee0e6] text-transparent bg-clip-text  "> Digital Presence</span></h1>
                    <p className="mt-10  text-xm text-center text-neutral-400 max-w-4xl">We believe that every business deserves a powerful online presence that reflects its unique identity and values and we create stunning user-friendly solutions that engage audiences and foster growth.<br />Join us in transforming your digital dreams into a thriving reality!</p>
                    <div className="flex justify-center my-10">
                        <Link to="/webgenius/login" className=" bg-gradient-to-r to-[#00E3F8] from-[#9ee0e6] py-3 px-4 rounded-md mr-3 text-black font-semibold">Join Web Genius</Link>
                        <Link to="/webgenius/about_us" className=" border text-primary border-[#9ee0e6] py-3 px-4 rounded-md  font-semibold">Learn more</Link>
                    </div>
                    <div className="flex mt-10 justify-center">
                        <video autoPlay loop muted className="rounded-lg border  border-[#00E3F8] w-1/2 shadow-[#9ee0e6] mx-2 my-4" >
                            <source src={video1} type="video/mp4" />
                        </video>
                        <video autoPlay loop muted className="rounded-lg border border-[#00E3F8] w-1/2 shadow-[#9ee0e6] mx-2 my-4" >
                            <source src={video2} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection

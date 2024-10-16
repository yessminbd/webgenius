import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { resourcesLinks } from "../Constants";
import { useState } from "react";
import { CheckCheck } from "lucide-react";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");


    const closeModal = () => {
        setMessage('');
        setEmail('');
        setName(""),
            setIsOpen(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    return (
        <>
            <section id='contact'>
                <footer className="mt-40 border-t py-10 border-neutral-700">
                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-md font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                {resourcesLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link className="text-neutral-300 hover:text-white" to={link.href}>
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="text-md mt-5 font-semibold mb-4">Follow Us</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <FaLinkedin className="text-neutral-300 border-none mr-2" size={16} />
                                    <a className="text-neutral-300 hover:text-white" href="https://twitter.com/yourpage">
                                        Linkedin
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <FaFacebook className="text-neutral-300 mr-2" size={16} />
                                    <a className="text-neutral-300 hover:text-white" href="https://www.facebook.com/yourpage">
                                        Facebook
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <FaInstagram className="text-neutral-300 mr-2" size={16} />
                                    <a className="text-neutral-300 hover:text-white" href="https://www.instagram.com/yourpage">
                                        Instagram
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <h3 className="text-md font-semibold mb-4">Contact Us</h3>
                            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                                <div className="flex items-center border border-neutral-700 rounded">
                                    <input
                                        onChange={(e) => (setName(e.target.value))}
                                        value={name}
                                        type="text"
                                        placeholder="Full name"
                                        className="flex-1 p-2 bg-transparent text-white rounded-r focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-center border border-neutral-700 rounded">
                                    <input
                                        onChange={(e) => (setEmail(e.target.value))}
                                        value={email}
                                        type="email"
                                        placeholder="Email"
                                        className="flex-1 p-2 bg-transparent text-white rounded-r focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex items-center border border-neutral-700 rounded">
                                    <textarea
                                        onChange={(e) => (setMessage(e.target.value))}
                                        value={message}
                                        placeholder="Your message"
                                        className="flex-1 p-2 bg-transparent text-white rounded-r focus:outline-none"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="py-2 px-3 border border-[#9ee0e6] bg-gradient-to-r to-[#00E3F8] from-[#9ee0e6] font-semibold text-black rounded-md"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="flex mt-12 justify-center items-center mb-0">
                        <p>Copyright © Webgenius, 2024. All Rights Reserved.</p>
                    </div>
                </footer>

                {isOpen && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="relative bg-neutral-800 rounded-lg shadow-xl p-6 w-full max-w-lg mx-auto">
                            <button
                                onClick={() => closeModal()}
                                className="absolute top-2 right-4 text-[#00E3F8] hover:text-white"
                            >
                                ✕
                            </button>
                            <div className="flex items-center justify-center">
                                <p className="p-3  text-[#00E3F8] flex items-center justify-center">
                                    <CheckCheck size={60} />
                                </p>
                            </div>
                            <h4 className="text-center text-lg font-semibold mt-4 text-[#00E3F8]">
                                Your message has been sent <br />
                                We will contact you soon!
                            </h4>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Footer;

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/images/Web_genius_logo.png';
import { navItems } from '../Constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileDrawerOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="w-14 h-14 mr-2" src={logo} alt="logo" />
                        <span className="text-2xl text-primary tracking-tight">Web Genius</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        <Link to={'/webgenius/home'} >Home</Link>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <button onClick={() => scrollToSection(item.href.slice(1))}>{item.label}</button>

                            </li>
                        ))}
                    </ul>
                    <div className='hidden lg:flex justify-center space-x-12 items-center'>
                        <a href="/webgenius/login" className='py-2 px-3 border text-primary border-[rgb(0,227,248)] rounded-md'>Sign In</a>
                        <a href="/webgenius/signup" className='py-2 px-3 border border-[#9ee0e6] bg-gradient-to-r to-[#00E3F8] from-[#9ee0e6] font-semibold text-black rounded-md'>Create an account</a>
                    </div>
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button className='text-primary' onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className='fixed bg-[#111111] right-0 z-20 w-full p-12 flex flex-col justify-center items-start lg:hidden'>
                        <ul className='mb-7'>
                            <Link to={'/webgenius/home'} >Home</Link>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <button onClick={() => scrollToSection(item.href.slice(1))}>
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className='flex space-x-6'>
                            <a href="/webgenius/login" onClick={() => setMobileDrawerOpen(false)} className='py-2 px-3 border border-[#9ee0e6] bg-gradient-to-r to-[#00E3F8] from-[#9ee0e6] font-semibold text-black rounded-md'>
                                Sign In
                            </a>
                            <a href="/webgenius/signup" onClick={() => setMobileDrawerOpen(false)} className='py-2 px-3 border border-[#9ee0e6] bg-gradient-to-r to-[#00E3F8] from-[#9ee0e6] font-semibold text-black rounded-md'>Create an account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
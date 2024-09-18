import hamburger from "../assets/icons/hamburger.svg";
import kec from "../assets/icons/kec.jpeg";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring', stiffness: 200, damping: 15,
            },
        },
    };

    const textHover = {
        scale: 1.1,
        transition: { duration: 0.3 },
    };

    return (
        <div id='navbar' className='flex items-center justify-between bg-white px-8 fixed w-full '>
            <div className='flex flex-shrink-0 items-center text-5xl font-bold cursor-pointer mt-1'>
                <a href="#home">
                    <img src={kec} width={24} height={24} />
                </a>
            </div>
            <div className="lg:hidden">
                <button onClick={toggleMenu} className={`text-3xl ${isOpen ? "hidden" : "visible mt-3"}`}>
                    <FaBars />
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial="hidden" animate="visible" exit="hidden" variants={menuVariants}
                        className={`lg:flex items-center justify-center gap-2.5 text-xl cursor-pointer flex flex-col absolute top-6 right-0 shadow-lg rounded-2xl py-4 px-7 lg:flex-row`}>
                        <button onClick={toggleMenu} className="text-xl absolute top-2 right-2 lg:hidden hover:text-white">
                            <FaTimes />
                        </button>
                        <motion.a href="#home" whileHover={textHover} onClick={() => setIsOpen(false)}>Home</motion.a>
                        <motion.a href="#events" whileHover={textHover} onClick={() => setIsOpen(false)}>Event Details</motion.a>
                        <motion.a href="#contact-us" whileHover={textHover} onClick={() => setIsOpen(false)}>Contact Us</motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className='hidden lg:flex items-center justify-center gap-9 text-xl cursor-pointer'>
                <motion.a href="#home" whileHover={textHover} onClick={() => setIsOpen(false)}>Home</motion.a>
                <motion.a href="#events" whileHover={textHover} onClick={() => setIsOpen(false)}>Event Details</motion.a>
                <motion.a href="#contact-us" whileHover={textHover} onClick={() => setIsOpen(false)}>Contact Us</motion.a>
            </div>
        </div>
    );
}

export default Navbar;

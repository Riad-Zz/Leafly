import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-[#0B3D2E] text-white  p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover font-semibold">About</a>
                    <a className="link link-hover font-semibold">Contact</a>
                    <a className="link link-hover font-semibold">Privacy Policy</a>
                    {/* <a className="link link-hover">Jobs</a> */}
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a className='text-2xl'>
                            <FaInstagram></FaInstagram>
                        </a>
                        <a className='text-2xl'>
                            <FaPinterestP></FaPinterestP>
                        </a>
                        <a className='text-2xl'>
                            <FaFacebookF></FaFacebookF>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p className='font-semibold'>Copyright © {new Date().getFullYear()} - All right reserved by LeafLy</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
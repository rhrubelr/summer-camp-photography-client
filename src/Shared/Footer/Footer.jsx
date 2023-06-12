import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-teal-800 text-base-content text-white">
                <div>
                    <span className="footer-title">Photography</span>
                    {/* <a className="link link-hover">Branding</a> */}
                    <a className="link link-hover"><img className='rounded-full' src="data:image/png;base64,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" alt="" /></a>

                    <a className="link link-hover">Marketing</a>

                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>

                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>

                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-teal-800 text-base-content ">
                <div>
                    <p className='text-white'>Copyright © 2023 - All right reserved by Photography Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
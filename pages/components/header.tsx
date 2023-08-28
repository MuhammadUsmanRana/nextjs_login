import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ConfirmMation from './confirmMation';

const Header: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={"/"}>
                        <h4 className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className="ml-3 text-xl">Authentication</span>
                        </h4>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        {typeof window !== 'undefined' && localStorage.getItem("token") ? (
                            <Link href="/components/dashboard">
                                <a className="mr-5 hover:text-gray-900">Dashboard</a>
                            </Link>
                        ) : null}
                    </nav>
                    {typeof window !== "undefined" && localStorage.getItem("token") && localStorage.getItem("user") ? (
                        <button
                            data-modal-target="popup-modal"
                            data-modal-toggle="popup-modal"
                            type="button"
                            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base mt-4 md:mt-0 rounded-b-[12px]"
                            onClick={openModal}
                        >
                            Logout
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-1"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    ) : (
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                            <Link href="/components/login"> {/* Add a login link when not authenticated */}
                                <h4 className="mr-5 hover:text-gray-900">Login</h4>
                            </Link>
                            <Link href={"/components/signup"}>
                                <h4 className="mr-5 hover:text-gray-900">Signup</h4>
                            </Link>
                        </nav>
                    )}
                </div>
            </header >
            <ConfirmMation isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default Header
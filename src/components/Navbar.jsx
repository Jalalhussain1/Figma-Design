import React from 'react';

function Navbar() {
    return (
        <nav className="flex flex-wrap items-center justify-between p-4 md:p-6 bg-white shadow-md border-b-2 border-red-200">
            {/* Logo Section */}
            <h1 className="text-2xl font-bold text-yellow-500">Shopy</h1>

            {/* Links Section */}
            <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-yellow-500">Men</a>
                <a href="#" className="text-gray-700 hover:text-yellow-500">Women</a>
                <a href="#" className="text-gray-700 hover:text-yellow-500">Accessories</a>
                <a href="#" className="text-gray-700 hover:text-yellow-500">Summer Sale</a>
                <a href="#" className="text-gray-700 hover:text-yellow-500">Kids</a>
            </div>

            {/* Search Input */}
            <div className="relative hidden md:block">
                <input
                    type="text"
                    placeholder="Search"
                    className="border rounded-full py-1 px-4 pl-10 w-[200px] md:w-[300px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <span className="absolute top-2 left-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M12.9 14.32a8 8 0 111.414-1.414l4.357 4.356a1 1 0 01-1.414 1.415l-4.357-4.357zM10 16A6 6 0 1010 4a6 6 0 000 12z" />
                    </svg>
                </span>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-gray-700 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onClick={() => {
                    const menu = document.getElementById('mobile-menu');
                    menu.classList.toggle('hidden');
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className="hidden w-full mt-4 md:hidden flex flex-col space-y-4 text-center"
            >
                <a href="#" className="text-gray-700 hover:text-yellow-500">Men</a>
                <a href="#" className="text-gray-700 hover:text-yellow-500">Women</a>
                <a href="#" className="text-gray-700 hover:text-yellow-500">Accessories</a>
                <a href="#" className="text-gray-700 hover:text-yellow-500">Summer Sale</a>
                <a href="#" className="text-gray-700 hover:text-yellow-500">Kids</a>
                <input
                    type="text"
                    placeholder="Search"
                    className="border rounded-full py-1 px-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>
        </nav>
    );
}

export default Navbar;

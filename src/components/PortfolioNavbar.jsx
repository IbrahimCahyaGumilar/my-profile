import React, { useState } from "react";
import { FaMobileAlt, FaDesktop } from "react-icons/fa";

const PortfolioNavbar = ({ title = "My Portfolio", downloadLink = "#" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [previewMode, setPreviewMode] = useState("desktop"); // 'desktop' or 'mobile'

    const togglePreview = (mode) => {
        setPreviewMode(mode);
        // Tambahkan logika tambahan jika perlu (misalnya update class root, context, dsb.)
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            {/* <PortfolioNavbar 
                    title="William Portfolio" 
                    downloadLink="https://github.com/IbrahimCahyaGumilar/web-book/archive/refs/heads/main.zip" 
                  /> */}
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Kiri: Judul */}
                <div className="text-xl font-bold text-blue-600">{title}</div>

                {/* Tengah: Mode Preview */}
                <div className="flex items-center space-x-4">
                    <button
                        className={`p-2 rounded ${previewMode === "mobile" ? "bg-gray-200" : ""}`}
                        onClick={() => togglePreview("mobile")}
                        title="Mobile view"
                    >
                        <FaMobileAlt size={18} />
                    </button>
                    <button
                        className={`p-2 rounded ${previewMode === "desktop" ? "bg-gray-200" : ""}`}
                        onClick={() => togglePreview("desktop")}
                        title="Desktop view"
                    >
                        <FaDesktop size={18} />
                    </button>
                </div>

                {/* Kanan: Tombol Download */}
                <div>
                    <a
                        href={downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Download
                    </a>
                </div>

                {/* Tombol Toggle Menu Mobile */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-inner px-4 pb-4 space-y-2">
                    <a href="#hero" className="block text-gray-700 hover:text-blue-500">Home</a>
                    <a href="#about" className="block text-gray-700 hover:text-blue-500">About</a>
                    <a href="#skills" className="block text-gray-700 hover:text-blue-500">Skills</a>
                    <a href="#project" className="block text-gray-700 hover:text-blue-500">Project</a>
                </div>
            )}
        </nav>
    );
};

export default PortfolioNavbar;

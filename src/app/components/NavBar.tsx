'use client'

import Link from 'next/link';
import { useState } from "react";
import UploadModal from './UploadModal';

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUpload = (title: string, videoUrl: string) => {
        // todo: actual upload logic
        console.log('Title:', title);
        console.log('Video URL:', videoUrl);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    <Link href="/">LearnWell</Link>
                </div>
                <div className="space-x-4 flex items-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 border rounded bg-blue-500 text-white"
                    >
                        Upload Video
                    </button>
                </div>
            </div>
            <UploadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onUpload={handleUpload}
            />
        </nav>
    );
};

export default NavBar;

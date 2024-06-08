import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    <Link href="/">LearnWell</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-black text-white p-5 flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-xl mb-3 md:mb-0">Portfolio</h3>
            <ul className="list-none flex flex-col md:flex-row">
                <li className="mb-2 md:mb-0 md:ml-5">
                    <Link href="/">
                        <p className="text-white font-bold transition-colors duration-300 hover:text-yellow-500">Home</p>
                    </Link>
                </li>
                <li className="mb-2 md:mb-0 md:ml-5">
                    <Link href="/about">
                        <p className="text-white font-bold transition-colors duration-300 hover:text-yellow-500">About</p>
                    </Link>
                </li>
                <li className="mb-2 md:mb-0 md:ml-5">
                    <Link href="/project">
                        <p className="text-white font-bold transition-colors duration-300 hover:text-yellow-500">Project</p>
                    </Link>
                </li>
                <li className="mb-2 md:mb-0 md:ml-5">
                    <Link href="/contact">
                        <p className="text-white font-bold transition-colors duration-300 hover:text-yellow-500">Contact</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap bg-gray-800 py-4">
			<ul className="flex items-center flex-wrap mx-4">
				<li>
					<Link href="/">
						<div className="text-white hover:bg-gray-700 mx-4 px-4 py-2 rounded cursor-pointer">
							Home
						</div>
					</Link>
				</li>
				<li>
					<Link href="/create">
						<div className="text-white hover:bg-gray-700 mx-4 px-4 py-2 rounded cursor-pointer">
							Fabrique à Signature
						</div>
					</Link>
				</li>
				<li>
					<Link href="/list">
						<div className="text-white hover:bg-gray-700 mx-4 px-4 py-2 rounded cursor-pointer">
							Liste des Signatures
						</div>
					</Link>
				</li>
			</ul>
			<div className="text-white text-xl font-bold flex-grow flex justify-center items-center">
				<Link href="/">
					<div className="flex items-center hover:bg-gray-700 hover:text-white px-2 py-1 rounded">
						<div className="">Générateur de Signature</div>
						<div className="ml-2 filter invert">
							<Image src="/signature.svg" alt="Logo" width={40} height={40} />
						</div>
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;

import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className="container mx-auto px-4 mt-8">
				<h1 className="text-4xl font-bold text-center mb-4">
					Générateur de Signature
				</h1>
				<p className="text-lg mb-6">
					Bienvenue sur notre application de génération de signature de mail.
					Créez et personnalisez facilement vos signatures pour vos e-mails
					professionnels.
				</p>
				<div className="flex justify-center flex-wrap">
					<Link href="/create">
						<div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
							Créer une signature
						</div>
					</Link>
					<Link href="/list">
						<div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded">
							Signatures existantes
						</div>
					</Link>
				</div>
			</main>
		</>
	);
}

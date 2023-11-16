import Navbar from '@/components/Navbar/Navbar';
import ListSignaturesComponent from '@/components/List/ListSignaturesComponent';

function List() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className="container mx-auto px-4 mt-8">
				<h1 className="text-4xl mx-auto text-center font-bold mb-4">
					Liste des Signatures :
				</h1>
				<ListSignaturesComponent />
			</main>
		</>
	);
}

export default List;

import Navbar from '@/components/Navbar/Navbar';
import FormComponent from '@/components/Create/FormComponent';

function Create() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className="container mx-auto px-4 mt-8">
				<h1 className="text-4xl mx-auto text-center font-bold mb-4">
					Fabrique à Signature
				</h1>
				<FormComponent />
			</main>
		</>
	);
}

export default Create;

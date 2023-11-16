'use client';
import { useSignatureContext } from '@/contexts/SignatureContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function ListSignaturesComponent() {
	const { signatures, removeSignatureById } = useSignatureContext();
	const [signatureExists, setSignatureExists] = useState(false);

	useEffect(() => {
		if (signatures.length && !signatureExists) setSignatureExists(true);
		if (!signatures.length && signatureExists) setSignatureExists(false);
	}, [signatureExists, signatures]);

	const handleDeleteClick = (id) => {
		removeSignatureById(id);
	};

	return (
		<div className="flex flex-wrap justify-center">
			{!signatureExists && (
				<div className="flex flex-col flex-wrap">
					<p className="text-lg mb-3">Aucune signature pour le moment.</p>
					<Link href="/create">
						<div className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 m-2 rounded">
							Créer une signature
						</div>
					</Link>
				</div>
			)}
			{signatures.map((signature) => (
				<div
					key={signature.id}
					className="max-w-sm mx-4 my-4 rounded overflow-hidden shadow-lg"
				>
					<div className="p-4">
						{signature.personPhoto && (
							<div className="mb-4">
								<Image
									src={URL.createObjectURL(signature.personPhoto)}
									alt="Photo utilisateur"
									className="w-24 h-24 rounded-full border border-gray-400 mx-auto"
									width={100}
									height={100}
								/>
							</div>
						)}
						{signature.companyLogo && (
							<div className="mb-4">
								<Image
									src={URL.createObjectURL(signature.companyLogo)}
									alt="Logo entreprise"
									className="w-24 h-24 mx-auto"
									width={100}
									height={100}
								/>
							</div>
						)}
						<div className="text-center">
							<p>
								<strong>Intitulé du poste:</strong> {signature.jobTitle}
							</p>
							<p>
								<strong>Téléphone:</strong> {signature.phoneNumber}
							</p>
							<p>
								<strong>Champ Personnalisé:</strong> {signature.customField}
							</p>
						</div>
						<div className="text-center mt-auto">
							<button
								onClick={() => handleDeleteClick(signature.id)}
								className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
							>
								Supprimer
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default ListSignaturesComponent;
